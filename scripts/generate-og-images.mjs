/**
 * Build 1200×630 OG JPGs at public/img/og/[slug].jpg from gameplay art.
 * TODO: Replace with branded OG creatives when design assets are ready.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ogDir = path.resolve('public/img/og');
const source = path.resolve('public/images/gameplay/palworld-esp-wallhack.png');

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
const input = await sharp(source).rotate().toBuffer();

for (const slug of SLUGS) {
  const buf = await sharp(input)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const dest = path.join(ogDir, `${slug}.jpg`);
  await writeFile(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest));
}
