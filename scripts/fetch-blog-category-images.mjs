/**
 * Download Palworld Steam screenshots for Features / Updates / Troubleshooting blog heroes.
 * Run: node scripts/fetch-blog-category-images.mjs && npm run optimize:images
 */
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const blogDir = path.resolve('public/images/blog');

/** Blog slug → use distinct Steam screenshot index (0–16). */
const BLOG_IMAGE_SLUGS = [
  // Features
  'palworld-cheats-features-guide',
  'palworld-pal-esp-features',
  'palworld-loot-magnet-features',
  'palworld-speedhack-features',
  'palworld-base-esp-features',
  'palworld-boss-esp-features',
  'palworld-coop-features',
  'palworld-cloud-dma-features',
  // Updates
  'eac-patch-day-checklist',
  'palworld-steam-hotfix-update',
  'palworld-cloud-dma-firmware-update',
  'palworld-breeding-update-cheats',
  'palworld-new-pals-update-esp',
  'palworld-pvp-balance-update',
  'palworld-major-update-loader',
  // Troubleshooting
  'eac-bypass-palworld-guide',
  'palworld-loader-not-opening',
  'palworld-esp-offset-fix',
  'palworld-cloud-dma-connection-fix',
  'palworld-crash-exploit-modules',
  'palworld-steam-verify-loader-order',
  'palworld-hwid-reset-portal-fix',
  'palworld-overlay-second-monitor-fix',
];

async function fetchSteamScreenshotUrls() {
  const res = await fetch('https://store.steampowered.com/api/appdetails?appids=1623730', {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PalworldHacksSite/1.0)' },
  });
  if (!res.ok) throw new Error(`Steam API ${res.status}`);
  const json = await res.json();
  return (json['1623730']?.data?.screenshots ?? []).map((s) => s.path_full).filter(Boolean);
}

async function saveBlogPng(url, slug) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PalworldHacksSite/1.0)' },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const input = Buffer.from(await res.arrayBuffer());
  const buf = await sharp(input)
    .rotate()
    .resize({ width: 1280, height: 720, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8 })
    .toBuffer();
  const dest = path.join(blogDir, `${slug}.png`);
  await writeFile(dest, buf);
  console.log('saved', path.relative(process.cwd(), dest), buf.length);
}

await mkdir(blogDir, { recursive: true });
const steamUrls = await fetchSteamScreenshotUrls();
if (steamUrls.length < BLOG_IMAGE_SLUGS.length) {
  console.warn('Warning: fewer Steam shots than blog slugs — will reuse indices.');
}

for (let i = 0; i < BLOG_IMAGE_SLUGS.length; i++) {
  const slug = BLOG_IMAGE_SLUGS[i];
  const url = steamUrls[i % steamUrls.length];
  try {
    await saveBlogPng(url, slug);
  } catch (err) {
    console.warn('skip', slug, err.message);
  }
}

console.log('Blog category images complete.');
