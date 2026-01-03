# Cloudflare Workers Deployment Guide

This guide will help you deploy the Stafford Group Associates website as a full-stack application on Cloudflare Workers.

## Architecture Overview

**Everything runs on a single Cloudflare Worker:**
- React SPA static assets (HTML, CSS, JS)
- Contact form API endpoint (`/api/submit-contact`)
- D1 database for contact submissions

## Deployment Steps

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

### 3. Build the React App

```bash
npm run build
```

This creates the production build in the `dist/` folder.

### 4. Create D1 Database

```bash
cd cloudflare
wrangler d1 create stafford-contacts
```

Copy the database ID from the output and update `cloudflare/wrangler.toml`:

```toml
database_id = "YOUR_DATABASE_ID_HERE"  # Replace with actual ID
```

### 5. Initialize Database Schema

```bash
wrangler d1 execute stafford-contacts --file=./schema.sql
```

### 6. Deploy the Worker

```bash
wrangler deploy
```

After deployment, you'll get a URL like:
```
https://stafford-group-associates.YOUR_SUBDOMAIN.workers.dev
```

### 7. Update Environment Variables

Update your `.env` file with the Worker URL:

```env
VITE_CONTACT_API_URL=https://stafford-group-associates.YOUR_SUBDOMAIN.workers.dev/api/submit-contact
```

Then rebuild and redeploy:

```bash
cd ..
npm run build
cd cloudflare
wrangler deploy
```

**That's it!** Your entire application (frontend + backend) is now live on a single Worker.

## Custom Domain (Optional)

To use your own domain:

1. Update `cloudflare/wrangler.toml`:
   ```toml
   routes = [
     { pattern = "yourdomain.com/*", custom_domain = true }
   ]
   ```

2. Redeploy:
   ```bash
   cd cloudflare && wrangler deploy
   ```

3. Configure DNS in Cloudflare Dashboard to point to your Worker

## Testing the Deployment

1. Visit your Worker URL
2. Navigate through the site (all routes should work)
3. Go to the Contact page and submit a test form (requires US IP)
4. Check worker logs: `wrangler tail`
5. View submissions: `wrangler d1 execute stafford-contacts --command="SELECT * FROM contact_submissions"`

## Updating the Site

When you make changes:

```bash
# 1. Make your code changes
# 2. Rebuild the React app
npm run build

# 3. Redeploy
cd cloudflare && wrangler deploy
```

## Troubleshooting

### Contact form not working
- Check Worker logs: `cd cloudflare && wrangler tail`
- Verify D1 database is bound: `wrangler d1 list`
- Check database has data: `wrangler d1 execute stafford-contacts --command="SELECT COUNT(*) FROM contact_submissions"`

### Geographic restriction error
- The contact form only works from US IP addresses
- Test with a US VPN or update `cloudflare/worker.js` to remove the restriction

### 404 errors on routes
- Make sure you ran `npm run build` before deploying
- Verify `dist/` folder exists and contains `index.html`
- Check `wrangler.toml` has correct `assets.directory` path

### Static assets not loading
- Ensure `dist/` folder is in the correct location relative to `cloudflare/`
- Rebuild: `npm run build`
- Redeploy: `cd cloudflare && wrangler deploy`

## Monitoring

View logs and analytics:

```bash
# Real-time logs
cd cloudflare && wrangler tail

# List recent deployments
wrangler deployments list

# View D1 database
wrangler d1 execute stafford-contacts --command="SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT 10"
```

Or use the Cloudflare Dashboard:
- Workers & Pages > stafford-group-associates > Analytics

## Cost Estimate

Cloudflare Free Tier includes:
- **Workers**: 100,000 requests/day
- **D1**: 5GB storage, 5M reads/day, 100k writes/day
- **Bandwidth**: Unlimited

This is more than sufficient for most business websites.
