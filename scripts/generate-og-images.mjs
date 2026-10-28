/**
 * Build distinct 1200×630 OG JPGs at public/img/og/[slug].jpg.
 * TODO: Replace with branded OG creatives when design assets are ready.
 */
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ogDir = path.resolve('public/img/og');
const gameplayDir = path.resolve('public/images/gameplay');

const SLUGS = [
  'home',
  'palworld-trainers',
  'palworld-mod-menu',
  'palworld-console-commands',
  'palworld-mods',
  'palworld-god-mode',
  'palworld-item-spawner',
  'palworld-hacks-xbox',
  'download',
  'how-to-install',
  'faq',
  'blog',
  'products',
  'forum',
  'support',
];

await mkdir(ogDir, { recursive: true });
const pngs = (await readdir(gameplayDir)).filter((f) => f.endsWith('.png')).sort();
if (!pngs.length) throw new Error('No gameplay PNGs found');

for (let i = 0; i < SLUGS.length; i++) {
  const slug = SLUGS[i];
  const source = path.join(gameplayDir, pngs[i % pngs.length]);
  const buf = await sharp(source)
    .rotate()
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const dest = path.join(ogDir, `${slug}.jpg`);
  await writeFile(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest), 'from', path.basename(source));
}
