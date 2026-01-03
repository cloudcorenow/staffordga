/**
 * Cloudflare Worker - Full Stack Application
 * - Serves React SPA static assets
 * - Handles contact form API endpoint
 * - Validates US-only IP addresses and stores submissions in D1 database
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
