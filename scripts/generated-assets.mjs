import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const sourceDir = "C:/Users/Home/.codex/generated_images/01a0f166-32dd-7952-8e4e-0cc04ba52328";
const outputDir = "public/images/editorial";
const sources = {
  "hero-home": "e5217cbc-6ed7-4e66-b45e-b7981f21042d",
  "hero-projects": "95e6f432-8042-4790-83d6-3073f152e522",
  "pool-family": "3e24a98a-b88b-4b75-8c5e-e8e1d956c945",
  "pool-indoor": "fcae71b3-d326-4885-9182-6bbac381a377",
  "pool-mirror": "6ca2b539-380a-48e8-ae7e-73be9f164933",
  "pool-design": "dc46a1ef-b5f6-4058-b092-6f2c061900ca",
  "pool-site": "ce8bd93c-7cc3-4943-8a28-c21e71e6ae9d",
  "pool-renovation": "5b5bc77a-0447-492b-a369-55e4faec2d72",
  "pool-commission": "cd36f3a6-55c7-4674-8561-f5e8475de364",
  "maintenance-clean": "cea1978d-8b70-4e8f-99c4-5b7cb513241f",
  "maintenance-test": "2b209a6a-7d79-43ef-b43e-0e61a12149ed",
  "maintenance-filter": "299169c1-cb3c-4d4f-a990-d52ebcd7f181",
  "maintenance-winter": "c55f28b0-f956-46a9-a9e2-501f8d61016e",
  "technical-pumps": "ee276abd-1f11-4e3a-a47c-e2e0e3b6dffa",
  "technical-filter": "547ec47c-11fa-4fcd-92c6-51d1c543dfa7",
  "technical-electric": "3f1b2531-5a75-4e08-9fb7-3f815a7e4d2a",
  "technical-auto": "533cc360-f6e3-4a26-8f3b-d7674d2cc14a",
  "heat-pump": "c5eccddd-08af-4116-8787-42f3c15fe3cf",
  "dehumidifier": "c4f1fd23-1b1c-4a9d-ae24-c86327f66cd1",
  "uv-system": "d3111b78-4fe6-40b0-af5a-15d8e742f3a8",
  "oxygen-treatment": "e746c9da-a0e5-40a9-9633-e2e6d018bc47",
  "water-balance": "33bac445-4ecb-468b-9255-ba4ae54eec64",
  "water-natural": "040329d5-b0d6-4089-9d10-c11cc7df9970",
  "fountain-decorative": "f60cf4c6-541f-41fe-9bc3-7378ba84f115",
  "fountain-jets": "f52b2f9f-459a-4e20-b1f4-6e3c5ab72ec6",
  "water-wall": "572675c0-aa95-4b70-835e-e2d6ff45ae30",
  "fountain-maintenance": "0446b915-5cec-4191-9d3c-494293cfa821",
  "spa-indoor": "55a7d843-0c77-4b4d-b2bb-5dd3d1524a3f",
  "spa-outdoor": "0ed7693c-3f52-473a-877a-3e764d574fa9",
  "spa-install": "d5b5d12c-ebf6-4a7a-9d5a-a9ba2ce37a43",
  "spa-care": "158e394c-3fba-49fa-a78b-9e0b4f9e047f",
  "sauna-interior": "4e393501-138d-4db5-b9bf-c6f576983d65",
  "hammam-interior": "e9609c05-eea0-4c60-bc74-b7d82f001c0e",
  "sauna-install": "908b69e9-9f55-41b0-97a9-997a88497b1e",
  "hammam-renovation": "8e5ce905-3446-49ad-9604-57e54ba59849",
  "equipment-robot": "32bc499a-4bdd-4d2f-ad44-f009943961fc",
  "equipment-skimmer": "8807d2f3-559b-491a-a168-3fec389ecef6",
  "equipment-led": "8c95d13f-3a85-4c24-aae2-509bdd99cfc5",
  "equipment-cover": "a6bd7d88-2efa-4633-8a18-0b628760ca00",
  "card-care-plan": "4e21da42-713a-4337-bb99-ad0712180f58",
  "card-biological-care": "bd3a0b13-f717-455c-9ec5-2a7e84a65b21",
};

await mkdir(outputDir, { recursive: true });
await Promise.all(Object.entries(sources).map(async ([name, id]) => {
  await sharp(join(sourceDir, `exec-${id}.png`))
    .resize({ width: 1536, withoutEnlargement: true })
    .webp({ quality: 81, effort: 5 })
    .toFile(join(outputDir, `${name}.webp`));
}));
console.log(`Optimized ${Object.keys(sources).length} editorial images`);

const secondNames = [
  "hero-services", "hero-advice", "hero-about", "hero-contact", "hero-maintenance-contract",
  "hero-biological", "hero-no-chlorine", "hero-indoor-climate", "hero-heating", "hero-water-wall",
  "hero-technical", "hero-pools", "hero-equipment", "hero-renovation", "hero-construction",
  "hero-treatment", "card-architect", "card-hydraulics", "card-pool-service", "card-overflow",
  "card-premium-care", "card-maint-contract", "card-concrete", "card-pipework", "card-wiring",
  "card-circulation", "card-filter-media", "card-uv-lamp", "card-regulation", "card-eco-filtration",
  "card-oxygen", "card-water-sample", "card-fountain-hotel", "card-water-jets", "card-fountain-pump",
  "card-spa-plans", "card-spa-hotel", "card-hammam-plan", "card-hammam-steam", "card-sauna-care",
  "card-water-wall-stone", "card-water-wall-pump", "card-water-wall-light", "card-water-wall-clean",
  "card-hall-comfort", "card-building-protection", "card-eco-limits", "card-heating-design",
  "card-climate-coordination", "card-heating-controls", "card-renovation-diagnostic",
  "card-renovation-plant", "card-renovation-tiling", "card-care-basic", "card-care-comfort",
  "card-care-premium", "card-tech-filter", "card-tech-treatment", "card-tech-pump", "card-tech-cabinet",
  "card-about-mission", "card-about-method", "card-about-transparency", "card-guide-build",
  "card-guide-care", "card-guide-pump", "card-realisations-pool", "card-realisations-fountain",
  "card-realisations-tech",
];
const ordered = readdirSync(sourceDir)
  .filter((file) => file.endsWith(".png"))
  .sort((a, b) => statSync(join(sourceDir, a)).mtimeMs - statSync(join(sourceDir, b)).mtimeMs);
const start = ordered.indexOf("exec-04034f91-e166-4aba-bc10-272392042535.png");
const end = ordered.indexOf("exec-b7588f65-7c28-46d0-9f9c-35059155d839.png");
const secondFiles = ordered.slice(start, end + 1).filter((file) => !/4e21da42|bd3a0b13/.test(file));
if (start < 0 || end < 0 || secondFiles.length !== secondNames.length) {
  throw new Error(`Expected ${secondNames.length} second-batch photos, found ${secondFiles.length}`);
}
await Promise.all(secondNames.map(async (name, index) => {
  await sharp(join(sourceDir, secondFiles[index]))
    .resize({ width: 1536, withoutEnlargement: true })
    .webp({ quality: 81, effort: 5 })
    .toFile(join(outputDir, `${name}.webp`));
}));
console.log(`Optimized ${secondNames.length} second-batch editorial images`);
