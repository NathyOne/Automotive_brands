/**
 * Builds a white-on-transparent Classic Driver mark from the card-style PNG
 * (pics/cd/image.png) for use on dark photography without mix-blend-screen.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const inputPath = path.join(rootDir, "pics/cd/image.png");
const outputDir = path.join(rootDir, "src/assets/optimized");
const outputPath = path.join(outputDir, "classic-driver-logo-home.webp");

const lo = 14;
const hi = 238;

function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const out = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += info.channels, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const L = 0.299 * r + 0.587 * g + 0.114 * b;
  const a = Math.round(255 * smoothstep(lo, hi, L));
  out[j] = 255;
  out[j + 1] = 255;
  out[j + 2] = 255;
  out[j + 3] = a;
}

await mkdir(outputDir, { recursive: true });

await sharp(out, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .resize({ width: 900, withoutEnlargement: true })
  .webp({ quality: 92, alphaQuality: 100 })
  .toFile(outputPath);

console.log(`Wrote ${path.relative(rootDir, outputPath)}`);
