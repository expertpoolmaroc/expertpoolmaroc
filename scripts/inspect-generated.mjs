import { readdirSync, statSync } from "node:fs";
import sharp from "sharp";

const dir = "C:/Users/Home/.codex/generated_images/01a0f166-32dd-7952-8e4e-0cc04ba52328/";
const images = readdirSync(dir)
  .filter((name) => name.endsWith(".png") && !/4e21da42|bd3a0b13/.test(name))
  .map((name) => ({ name, time: statSync(dir + name).mtimeMs }))
  .filter(({ time }) => time >= new Date("2026-09-30T12:26:46Z").getTime())
  .sort((a, b) => a.time - b.time);

const cells = await Promise.all(images.map(async ({ name }, index) => {
  const photo = await sharp(dir + name).resize(150, 100, { fit: "cover" }).png().toBuffer();
  const label = Buffer.from(`<svg width="150" height="25"><rect width="150" height="25" fill="white"/><text x="5" y="18" font-size="17" fill="black">${index}</text></svg>`);
  return [photo, label];
}));
const layers = cells.flatMap(([photo, label], index) => {
  const left = (index % 7) * 150;
  const top = Math.floor(index / 7) * 125;
  return [{ input: photo, left, top }, { input: label, left, top: top + 100 }];
});
await sharp({ create: { width: 1050, height: Math.ceil(images.length / 7) * 125, channels: 4, background: "#fff" } })
  .composite(layers).png().toFile("docs/second-generated-contact-sheet.png");
images.forEach(({ name }, index) => console.log(`${index} ${name}`));
