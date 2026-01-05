/**
 * Cloudflare Worker - Full Stack Application
 * - Serves React SPA static assets
 * - Handles contact form API endpoint
 * - Validates US-only IP addresses and stores submissions in D1 database
 * - Sends email notifications via Resend
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (url.pathname === '/api/submit-contact' && request.method === 'POST') {
      return handleContactSubmission(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function checkRateLimit(ipAddress, env) {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();

  await env.DB.prepare(
    'DELETE FROM rate_limits WHERE last_attempt < ?'
  ).bind(oneHourAgo).run();

  const result = await env.DB.prepare(
    'SELECT submission_count, first_attempt FROM rate_limits WHERE ip_address = ?'
  ).bind(ipAddress).first();

  if (!result) {
    return { allowed: true, count: 0 };
  }

  const firstAttempt = new Date(result.first_attempt);
  const hoursSinceFirst = (Date.now() - firstAttempt.getTime()) / (1000 * 60 * 60);

  if (hoursSinceFirst >= 1) {
    await env.DB.prepare(
      'DELETE FROM rate_limits WHERE ip_address = ?'
    ).bind(ipAddress).run();
    return { allowed: true, count: 0 };
  }

  const count = result.submission_count;
  if (count >= 3) {
    return { allowed: false, count };
  }

  return { allowed: true, count };
}

async function updateRateLimit(ipAddress, env) {
  const existing = await env.DB.prepare(
    'SELECT submission_count FROM rate_limits WHERE ip_address = ?'
  ).bind(ipAddress).first();

  if (existing) {
    await env.DB.prepare(
      'UPDATE rate_limits SET submission_count = submission_count + 1, last_attempt = datetime("now") WHERE ip_address = ?'
    ).bind(ipAddress).run();
  } else {
    await env.DB.prepare(
      'INSERT INTO rate_limits (ip_address, submission_count) VALUES (?, 1)'
    ).bind(ipAddress).run();
  }
}

async function handleContactSubmission(request, env) {
  try {
    const countryCode = request.headers.get('CF-IPCountry') || 'UNKNOWN';
    const ipAddress = request.headers.get('CF-Connecting-IP') || 'unknown';

    if (countryCode !== 'US') {
      return new Response(
        JSON.stringify({
          error: 'Service not available',
          message: 'This contact form is only available to visitors from the United States.',
        }),
        {
          status: 403,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const formData = await request.json();

    if (formData.website !== undefined && formData.website !== '') {
      return new Response(
        JSON.stringify({
          error: 'Invalid submission',
          message: 'Spam detected.',
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const submissionTime = formData.submittedAt - formData.formLoadTime;
    if (submissionTime < 3000) {
      return new Response(
        JSON.stringify({
          error: 'Invalid submission',
          message: 'Form submitted too quickly. Please try again.',
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const rateLimitCheck = await checkRateLimit(ipAddress, env);
    if (!rateLimitCheck.allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          message: `Too many submissions. Please try again later. (${rateLimitCheck.count}/3 submissions in the last hour)`,
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({
          error: 'Missing required fields',
          message: 'Name, email, and message are required.',
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const stmt = env.DB.prepare(
      `INSERT INTO contact_submissions (name, email, phone, company, message, ip_address, country_code)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    );

    await stmt.bind(
      formData.name,
      formData.email,
      formData.phone || null,
      formData.company || null,
      formData.message,
      ipAddress,
      countryCode
    ).run();

    await updateRateLimit(ipAddress, env);

    await sendEmailNotification(formData, env);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been received. One of our representatives will contact you shortly.',
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: 'An unexpected error occurred. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

async function sendEmailNotification(formData, env) {
  try {
    const emailBody = {
      from: 'noreply@notifications.staffordga.com',
      to: env.NOTIFICATION_EMAIL,
      subject: `New Contact Form Submission - ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      console.error('Failed to send email:', await response.text());
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}
