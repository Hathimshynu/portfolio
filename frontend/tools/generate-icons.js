#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const svgFiles = [
  { src: 'vite.svg', sizes: [192, 512] },
  { src: 'apple-touch-icon.svg', sizes: [180] }
];

// screenshots to generate from vite.svg
const screenshots = [
  { src: 'vite.svg', out: 'screenshot-wide.png', size: [1200, 800] },
  { src: 'vite.svg', out: 'screenshot-mobile.png', size: [640, 360] }
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
    // generate screenshots
    for (const sc of screenshots) {
      const svgPath = path.join(publicDir, sc.src);
      if (!fs.existsSync(svgPath)) {
        console.warn('Missing SVG for screenshot:', svgPath);
        continue;
      }
      const svgBuffer = fs.readFileSync(svgPath);
      const outPath = path.join(publicDir, sc.out);
      await sharp(svgBuffer).resize(sc.size[0], sc.size[1]).png().toFile(outPath);
      console.log('Wrote', outPath);
    }
    console.log('Icon generation complete.');
  } catch (err) {
    console.error('Error generating icons:', err);
    process.exit(1);
  }
}

generate();
