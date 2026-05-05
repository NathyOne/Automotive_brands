import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
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
    input: "pics/new_pics/ZB-157.JPG",
    output: "zb-gallery-157.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/Six.JPG",
    output: "zb-gallery-six.webp",
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
    input: "pics/new_pics/Leadmore front.jpg",
    output: "encor-gallery-leadmore-front.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/Leadmore Rear.jpg",
    output: "encor-gallery-leadmore-rear.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/Encor side view.jpg",
    output: "encor-gallery-side-view.webp",
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
    input: "pics/new_pics/jESKO3.JPG",
    output: "kerr-koenigsegg-jesko-three.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/Pre-series-Jesko-1.jpg",
    output: "kerr-koenigsegg-pre-series-jesko.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/KoenigseggService.jpg",
    output: "kerr-koenigsegg-service.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/jESKO4.JPG",
    output: "kerr-koenigsegg-jesko-four.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/jESKO6.JPG",
    output: "kerr-koenigsegg-jesko-six.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/85c0d1cd-4fa0-4f2b-a09f-6a5745dde5a6.jpeg",
    output: "kerr-gunther-interior.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/1868f6b9-e08f-49f9-9057-916f7fc71211.jpeg",
    output: "kerr-gunther-night.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/c6544e62-9da0-4115-acae-e180d7462eff.jpeg",
    output: "kerr-gunther-track-front.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/3fa3bba7-843b-4f96-a6f0-4e547a3bd2fd.jpeg",
    output: "kerr-gunther-track-rear.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/156cb690-4b3a-4739-b301-11f09a92279d.jpeg",
    output: "kerr-gunther-blue-rear.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/77e7dff0-8c05-4730-a4a9-a7926dbe41c1.jpeg",
    output: "kerr-gunther-green-side.webp",
    width: 1800,
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
    input: "pics/new_pics/7CE6FEEE-C948-40BF-BD81-D855BD0BE9D4.png",
    output: "classic-driver-gallery-miura.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/IMG_6670.webp",
    output: "classic-driver-gallery-6670.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/IMG_6503.png",
    output: "classic-driver-gallery-6503.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/IMG_6501.png",
    output: "classic-driver-gallery-6501.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/IMG_6500.png",
    output: "classic-driver-gallery-6500.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/IMG_6497.png",
    output: "classic-driver-gallery-6497.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/DSC05408-Enhanced-NR.jpg",
    output: "classic-driver-gallery-5408.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/new_pics/IMG_5720.jpeg",
    output: "classic-driver-gallery-5720.webp",
    width: 1800,
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
    input: "pics/taag_new/IMG_1240 (1).png",
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
  {
    input: "pics/taag_new/IMG_1240 (1).png",
    output: "taag-logo-dark.webp",
    width: 1200,
    quality: 90,
    trim: true,
  },
  {
    input: "pics/taag_new/39B9C5A5-383D-4B9C-90D7-FFDFBE0671A1.png",
    output: "taag-market-entry-one.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/taag_new/taag_visual_clean.png",
    output: "taag-market-entry-two.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/taag_new/IMG_1250.jpeg",
    output: "taag-wide-display.webp",
    width: 1800,
    quality: 84,
  },
  {
    input: "pics/taag_new/taag_visual_clean (1).png",
    output: "taag-grey-wall-car.webp",
    width: 1800,
    quality: 84,
    extract: {
      left: 0,
      top: 768,
      width: 1076,
      height: 256,
    },
  },
  {
    input: "pics/taag_new/Tesla Electric Sydney.jpeg",
    output: "taag-tesla-sydney.webp",
    width: 1600,
    quality: 86,
  },
  {
    input: "pics/Taag/IMG_1174.jpeg",
    output: "taag-market-entry-three.webp",
    width: 1600,
    quality: 82,
  },
  {
    input: "pics/taag_new/EB9FE7F8-D5E6-47FF-8F75-EF3F4D766108.png",
    output: "taag-leadership-jay.webp",
    width: 1600,
    quality: 82,
  },
  {
    input: "pics/taag_new/Encor side view (2).jpg",
    output: "taag-leadership-collaboration.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/taag_new/2122AB11-0AFD-4DF2-9D52-A08EE21DCF4A.png",
    output: "taag-leadership-andrew.webp",
    width: 1600,
    quality: 82,
  },
  {
    input: "pics/Taag/04071668-7DF2-47FE-B636-884A91E561DC.png",
    output: "taag-strategic-networks.webp",
    width: 1800,
    quality: 82,
  },
  {
    input: "pics/Taag/FE2035DA-AB5E-4E5D-9F2E-725EE8C3DB5B.png",
    output: "taag-advisory-network.webp",
    width: 1800,
    quality: 82,
  },
];

await mkdir(outputDir, { recursive: true });

for (const task of tasks) {
  const inputPath = path.join(rootDir, task.input);
  const outputPath = path.join(outputDir, task.output);

  if (!existsSync(inputPath)) {
    console.warn(`Skipping missing input: ${task.input}`);
    continue;
  }

  let pipeline = sharp(inputPath);

  if (task.trim) {
    pipeline = pipeline.trim();
  }

  if (task.extract) {
    pipeline = pipeline.extract(task.extract);
  }

  await pipeline
    .resize({ width: task.width, withoutEnlargement: true })
    .webp({ quality: task.quality, alphaQuality: 92 })
    .toFile(outputPath);
}

console.log(`Optimized ${tasks.length} assets into ${outputDir}`);
