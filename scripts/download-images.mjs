/**
 * SketchSpark — Image download script
 *
 * Downloads Unsplash images used in the features section to local /public/images/
 * Run: npm run download-images
 *
 * Note: The demo section uses SVG filters on remote Unsplash images (no download needed
 * for the demo to work). For production, download these source images too.
 */
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public', 'images');

const images = [
  // Feature images
  {
    url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=375&fit=crop',
    path: 'features/multi-style-artwork.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=375&fit=crop',
    path: 'features/hd-resolution.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=375&fit=crop',
    path: 'features/batch-processing.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=600&h=375&fit=crop',
    path: 'features/style-consistency.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1626785774573-4b79f0621024?w=600&h=375&fit=crop',
    path: 'features/color-palette-control.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1550537687-c91072c4e03d?w=600&h=375&fit=crop',
    path: 'features/commercial-license.jpg',
  },
  // Demo source images
  {
    url: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=500&h=500&fit=crop',
    path: 'demo/animal-source.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    path: 'demo/landscape-source.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop',
    path: 'demo/portrait-source.jpg',
  },
  // Hero source image
  {
    url: 'https://images.unsplash.com/photo-1579762715118-a6f1d789a8b5?w=400&h=530&fit=crop',
    path: 'hero/hero-source.jpg',
  },
];

async function downloadImage(url, filePath) {
  const fullPath = join(PUBLIC_DIR, filePath);
  const dir = dirname(fullPath);

  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  if (existsSync(fullPath)) {
    console.log(`  [skip] ${filePath} (already exists)`);
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    await writeFile(fullPath, buffer);
    console.log(`  [done] ${filePath}`);
  } catch (err) {
    console.error(`  [fail] ${filePath}: ${err.message}`);
  }
}

async function main() {
  console.log('SketchSpark — Downloading images...\n');
  for (const img of images) {
    await downloadImage(img.url, img.path);
  }
  console.log('\nDone!');
}

main();
