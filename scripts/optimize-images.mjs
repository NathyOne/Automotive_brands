import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const outputDir = path.join(rootDir, "src/assets/optimized");

const tasks = [
  {
    input: "pics/zeiglerBailey/ZB-11.JPG",
    output: "zb-hero.webp",
    width: 2200,
    quality: 78,
  },
  {
    input: "pics/zeiglerBailey/hERO tOP.JPG",
    output: "zb-product-hero.webp",
    width: 2400,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/eXTERIOR.JPG",
    output: "zb-exterior.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/iNTERIOR.JPG",
    output: "zb-interior.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/eNGINEERING.JPG",
    output: "zb-engineering.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/eNGINE.JPG",
    output: "zb-engine.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/dc1ae3652_001_Encor_Hero_Exterior1 (1).jpg",
    output: "encor-hero.webp",
    width: 2200,
    quality: 78,
  },
  {
    input: "pics/encor/Encor HERO.jpg",
    output: "encor-product-hero.webp",
    width: 2400,
    quality: 82,
  },
  {
    input: "pics/encor/Curtain Raiser.jpg",
    output: "encor-curtain-raiser.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/Elevating the Essence.jpg",
    output: "encor-elevating-essence.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/A Special Place.jpg",
    output: "encor-special-place.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/kerr/Kerr Collection Jesko.jpg",
    output: "kerr-hero.webp",
    width: 2200,
    quality: 78,
  },
  {
    input: "pics/cd/IMG_1320.jpeg",
    output: "classic-driver-hero.webp",
    width: 1400,
    quality: 80,
  },
  {
    input: "pics/zeiglerBailey/ZB_logo_Mark_Type_HORZ_POS_RGB.png",
    output: "zb-logo.webp",
    width: 900,
    quality: 92,
    trim: true,
  },
  {
    input: "pics/encor/b9a12562f_Encor_Logotype_Final_Small_black.png",
    output: "encor-logo.webp",
    width: 1000,
    quality: 92,
    trim: true,
  },
  {
    input: "pics/cd/image.png",
    output: "classic-driver-logo.webp",
    width: 900,
    quality: 92,
  },
  {
    input: "pics/kerr/Kerr Collection png.png",
    output: "kerr-logo.webp",
    width: 700,
    quality: 88,
  },
  {
    input: "pics/Taag/IMG_0924.png",
    output: "taag-wide-logo.webp",
    width: 1200,
    quality: 90,
    trim: true,
  },
  {
    input: "pics/Taag/53FEB400-DEB9-4636-BCB7-42F57DD02918.png",
    output: "taag-glow-logo.webp",
    width: 900,
    quality: 88,
  },
];

await mkdir(outputDir, { recursive: true });

for (const task of tasks) {
  let pipeline = sharp(path.join(rootDir, task.input));

  if (task.trim) {
    pipeline = pipeline.trim();
  }

  await pipeline
    .resize({ width: task.width, withoutEnlargement: true })
    .webp({ quality: task.quality, alphaQuality: 92 })
    .toFile(path.join(outputDir, task.output));
}

console.log(`Optimized ${tasks.length} assets into ${outputDir}`);
