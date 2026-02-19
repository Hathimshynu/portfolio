#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const svgFiles = [
  { src: 'vite.svg', sizes: [192, 512] },
  { src: 'apple-touch-icon.svg', sizes: [180] }
];

async function generate() {
  try {
    for (const file of svgFiles) {
      const svgPath = path.join(publicDir, file.src);
      if (!fs.existsSync(svgPath)) {
        console.warn('Missing SVG:', svgPath);
        continue;
      }

      const svgBuffer = fs.readFileSync(svgPath);
      for (const size of file.sizes) {
        const outName = file.src.replace('.svg', `-${size}.png`).replace('vite-', 'favicon-');
        const outPath = path.join(publicDir, outName);
        await sharp(svgBuffer).resize(size, size).png().toFile(outPath);
        console.log('Wrote', outPath);
      }
    }
    console.log('Icon generation complete.');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
}

generate();
