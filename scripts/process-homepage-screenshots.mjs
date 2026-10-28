/**
 * Sharpen + normalize user-provided Palworld screenshots for the homepage hero.
 * Run: node scripts/process-homepage-screenshots.mjs && npm run optimize:images
 */
import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assetsDir = path.resolve(
  root,
  '..',
  '.cursor',
  'projects',
  'c-Users-Faadi-Khan-palworld-levo',
  'assets',
);

/** Source filename fragment → public gameplay PNG name */
const SOURCES = [
  ['image-1cfa9d00-3f35-4c57-8286-6547eca77d27', 'palworld-home-mod-menu-inventory.png'],
  ['image-52106b9f-c173-4d70-ab3b-2d009c3d6403', 'palworld-home-insta-craft.png'],
  ['image-706b6ac3-51cc-46c9-95eb-1ea6be5dc41e', 'palworld-home-open-world.png'],
  ['image-2df9f6ff-a9bb-4be1-a604-8722629151d2', 'palworld-home-magnet-loot.png'],
  ['image-b63552f8-cbe0-4f49-a15f-d67cd4cd262e', 'palworld-home-legendary-spheres.png'],
  ['image-816ffdaf-3004-46f0-93fd-2c301dc5daea', 'palworld-home-boss-katress.png'],
  ['image-f80121bd-aef6-4373-87d9-6818dbd56d02', 'palworld-home-boss-first-kill.png'],
];

const outDir = path.resolve('public/images/gameplay');

async function findAsset(fragment) {
  const { readdir } = await import('node:fs/promises');
  const files = await readdir(assetsDir);
  const match = files.find((f) => f.includes(fragment));
  if (!match) throw new Error(`Missing asset matching ${fragment}`);
  return path.join(assetsDir, match);
}

async function enhance(inputPath, outputPath) {
  const meta = await sharp(inputPath).metadata();
  const targetWidth = Math.max(1280, Math.min(meta.width ?? 1280, 1600));

  await sharp(inputPath)
    .rotate()
    .resize({
      width: targetWidth,
      fit: 'inside',
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .normalize()
    .sharpen({ sigma: 1.15, m1: 0.8, m2: 0.35, x1: 2, y2: 10, y3: 20 })
    .png({ compressionLevel: 8, palette: false })
    .toFile(outputPath);

  console.log('enhanced', path.basename(outputPath), `← ${path.basename(inputPath)}`);
}

await mkdir(outDir, { recursive: true });

for (const [fragment, outName] of SOURCES) {
  const src = await findAsset(fragment);
  const dest = path.join(outDir, outName);
  await enhance(src, dest);
}

console.log('Homepage screenshots ready in public/images/gameplay/');
