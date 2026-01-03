# Cloudflare Worker - Full Stack Deployment

This directory contains the Cloudflare Worker that serves the entire Stafford Group Associates website (frontend + backend).

## What This Does

**Single Worker handles everything:**
- Serves React SPA (HTML, CSS, JS, images)
- Handles contact form API (`/api/submit-contact`)
- Stores submissions in D1 database
- Validates US-only access for contact form

## Prerequisites

1. Cloudflare account (free tier works)
2. Node.js and npm installed
3. Wrangler CLI: `npm install -g wrangler`

## Deployment Steps

### 1. Login to Cloudflare

```bash
wrangler login
```

### 2. Build the React App

From the project root (not this directory):

```bash
cd ..
npm run build
```

This creates the production build in `dist/` that the Worker will serve.

### 3. Create D1 Database

```bash
cd cloudflare
wrangler d1 create stafford-contacts
```

Copy the database ID from the output and update `wrangler.toml`:

```toml
database_id = "your-actual-database-id"  # Replace YOUR_DATABASE_ID_HERE
```

### 4. Initialize Database

```bash
wrangler d1 execute stafford-contacts --file=./schema.sql
```

### 5. Deploy Everything

```bash
wrangler deploy
```

Your site is now live! You'll get a URL like:
```
https://stafford-group-associates.YOUR_SUBDOMAIN.workers.dev
```

## How It Works

The Worker intelligently routes requests:

- `POST /api/submit-contact` → Contact form handler (validates US IP, saves to D1)
- All other requests → Serves static files from `dist/` folder

The React app handles client-side routing for all pages.

## Updating the Site

When you make changes:

```bash
# 1. Make your code changes
# 2. Rebuild from project root
cd /path/to/project
npm run build

# 3. Redeploy the worker
cd cloudflare
wrangler deploy
```

## Local Development

```bash
# Terminal 1: React dev server (from project root)
npm run dev

# Terminal 2: Worker with D1 (from cloudflare directory)
wrangler dev
```

## View Submissions

### Using CLI

```bash
# Recent submissions
wrangler d1 execute stafford-contacts --command="SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT 10"

# Total count
wrangler d1 execute stafford-contacts --command="SELECT COUNT(*) as total FROM contact_submissions"

# Today's submissions
wrangler d1 execute stafford-contacts --command="SELECT * FROM contact_submissions WHERE date(submitted_at) = date('now')"
```

### Using Dashboard

1. Go to Cloudflare Dashboard
2. Navigate to Workers & Pages > D1
3. Select `stafford-contacts` database
4. Run SQL queries in the console

## Monitoring

### Real-time Logs

```bash
wrangler tail
```

### Dashboard

- Workers & Pages > stafford-group-associates
- View analytics, logs, and metrics

## Custom Domain

To use your own domain:

1. Update `wrangler.toml`:
   ```toml
   routes = [
     { pattern = "yourdomain.com/*", custom_domain = true }
   ]
   ```

2. Redeploy:
   ```bash
   wrangler deploy
   ```

3. Configure DNS in Cloudflare Dashboard

## Troubleshooting

### Site not loading
- Ensure `dist/` folder exists: `ls ../dist`
- Rebuild: `cd .. && npm run build`
- Check `wrangler.toml` assets path is correct (`../dist`)

### Contact form not working
- Check logs: `wrangler tail`
- Verify database exists: `wrangler d1 list`
- Test from US IP or remove restriction in `worker.js`

### Database errors
- Verify database_id matches in `wrangler.toml`
- Check schema is initialized: `wrangler d1 execute stafford-contacts --file=./schema.sql`

### 404 on routes
- Make sure React app is built before deploying
- Verify `_redirects` file exists in `dist/`

## Cost

Cloudflare Free Tier:
- 100,000 Worker requests/day
- 5 GB D1 storage
- 5M D1 reads/day
- 100k D1 writes/day

More than enough for most business sites!
