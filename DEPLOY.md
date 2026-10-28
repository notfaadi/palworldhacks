# Deploy: GitHub + Cloudflare Pages

## Local 10/10 checklist

```bash
npm install
npm run generate:og
npm run check:local   # SEO limits, no localhost in src, dual build smoke test
npm run dev           # http://localhost:4321 — amber bar confirms local canonicals
```

- **Dev** loads `.env.development` → `PUBLIC_SITE_URL=http://localhost:4321`
- **Production build** loads `.env.production` → `https://getpalworldhack.net`

## GitHub

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## Cloudflare Pages

1. Connect the GitHub repo.
2. **Build command:** `npm run build`
3. **Build output directory:** `dist`
4. **Environment variables** (Production):
   - `PUBLIC_SITE_URL` = `https://getpalworldhack.net`
   - Optional: `INDEXNOW_KEY`, `PUBLIC_GA_MEASUREMENT_ID`
5. **Custom domain:** `getpalworldhack.net` (DNS to Cloudflare).
6. After first deploy, submit `https://getpalworldhack.net/sitemap-index.xml` in Google Search Console.

This repo includes `wrangler.toml` for Workers static assets if you prefer `npm run deploy` instead of Pages UI.
