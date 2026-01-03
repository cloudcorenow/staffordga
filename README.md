# Stafford Group Associates Website

A modern, professional website for Stafford Group Associates debt collection services, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Hosting**: Cloudflare Workers (full stack)
- **Database**: Cloudflare D1 (contact form submissions)

## Project Structure

```
├── src/                      # React application source
│   ├── components/           # React components organized by feature
│   │   ├── about/           # About page components
│   │   ├── common/          # Shared components
│   │   ├── contact/         # Contact form components
│   │   ├── home/            # Home page components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   └── resources/       # Resources page components
│   ├── pages/               # Page components
│   ├── types/               # TypeScript type definitions
│   ├── App.tsx              # Main app component with routing
│   └── main.tsx             # Application entry point
├── cloudflare/              # Cloudflare Worker backend
│   ├── worker.js            # Contact form API handler
│   ├── schema.sql           # D1 database schema
│   ├── wrangler.toml        # Worker configuration
│   └── README.md            # Worker deployment guide
├── public/                  # Static assets
└── dist/                    # Production build output

```

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions to Cloudflare Workers.

**Quick deployment steps:**

1. Install Wrangler: `npm install -g wrangler`
2. Login: `wrangler login`
3. Build: `npm run build`
4. Create database: `cd cloudflare && wrangler d1 create stafford-contacts`
5. Update `wrangler.toml` with database ID
6. Initialize DB: `wrangler d1 execute stafford-contacts --file=./schema.sql`
7. Deploy: `wrangler deploy`

**Done!** Your entire site (frontend + backend) is live on a single Worker.

## Environment Variables

Update the `.env` file with your Cloudflare Worker URL after deployment:

```env
# Contact form API endpoint (Cloudflare Worker)
VITE_CONTACT_API_URL=https://your-worker.your-subdomain.workers.dev/api/submit-contact
```

After deploying to Cloudflare, replace the placeholder with your actual Worker URL.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Contact Form**: With US geographic restriction and spam protection
- **Client Portal**: Dedicated area for client resources
- **Resource Center**: FAQ and compliance information
- **Legal Compliance**: FDCPA disclaimer and privacy notices
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance**: Optimized images, lazy loading, and code splitting
- **SEO Ready**: Meta tags and semantic structure

## Pages

- **Home**: Hero, services overview, features, stats, testimonials, CTA
- **About**: Company history, team, values
- **Services**: Detailed service offerings
- **Resources**: FAQ, compliance information, helpful links
- **Contact**: Contact form with validation and geographic restriction
- **Legal**: Terms, privacy policy, FDCPA disclaimer
- **Client Portal**: Login and client resources (placeholder)

## Development Notes

- All components use TypeScript with strict type checking
- Tailwind CSS for styling with custom color scheme
- Framer Motion for smooth animations and transitions
- React Router for client-side routing
- Lucide React for consistent iconography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private and confidential - All rights reserved.
