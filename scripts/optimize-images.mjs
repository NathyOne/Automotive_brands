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
    input: "pics/zeiglerBailey/One.JPG",
    output: "zb-gallery-one.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/Two.JPG",
    output: "zb-gallery-two.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/three.JPG",
    output: "zb-gallery-three.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/Four.JPG",
    output: "zb-gallery-four.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/Five.JPG",
    output: "zb-gallery-five.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/Seven.JPG",
    output: "zb-gallery-seven.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/Nine.JPG",
    output: "zb-gallery-nine.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/zeiglerBailey/Ten.JPG",
    output: "zb-gallery-ten.webp",
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
    input: "pics/encor/Encor Dash.jpg",
    output: "encor-gallery-dash.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/Encor Engine2.jpg",
    output: "encor-gallery-engine.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/Encor Rear full.jpg",
    output: "encor-gallery-rear-full.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/Encor rear light.jpg",
    output: "encor-gallery-rear-light.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/encor Black.jpg",
    output: "encor-gallery-black.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/encor Silver.jpg",
    output: "encor-gallery-silver.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/encor green.jpg",
    output: "encor-gallery-green.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/encor/encor sideflat.jpg",
    output: "encor-gallery-sideflat.webp",
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
    input: "pics/kerr/Koenigsegg1.jpg",
    output: "kerr-koenigsegg-one.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/kerr/Koenigsegg2.jpg",
    output: "kerr-koenigsegg-two.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/kerr/Gunther 1.jpg",
    output: "kerr-gunther-one.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/kerr/Gunther Engine.jpg",
    output: "kerr-gunther-engine.webp",
    width: 1600,
    quality: 82,
  },
  {
    input: "pics/cd/IMG_1320.jpeg",
    output: "classic-driver-hero.webp",
    width: 1400,
    quality: 80,
  },
  {
    input: "pics/cd/Hero.jpg",
    output: "classic-driver-product-hero.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/cd/Collecting with purpose.jpg",
    output: "classic-driver-collecting-purpose.webp",
    width: 1600,
    quality: 82,
  },
  {
    input: "pics/cd/Experience shapes perspective.jpg",
    output: "classic-driver-experience-perspective.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/cd/More than ownership.PNG",
    output: "classic-driver-more-than-ownership.webp",
    width: 1400,
    quality: 82,
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
    input: "pics/cd/26BEBEFC-D5B3-4F46-BE47-038921DD014A.png",
    output: "classic-driver-logo-green.webp",
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
