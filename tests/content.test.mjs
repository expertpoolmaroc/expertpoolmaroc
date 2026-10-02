import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const pagesSource = readFileSync(new URL("../src/content/pages.ts", import.meta.url), "utf8");
const configSource = readFileSync(new URL("../src/config/site.ts", import.meta.url), "utf8");
const imageSource = readFileSync(new URL("../src/content/images.ts", import.meta.url), "utf8");
const seoSource = readFileSync(new URL("../src/lib/seo.ts", import.meta.url), "utf8");
const { allPages } = await import("../src/content/pages.ts");
const { imageAssignments } = await import("../src/content/images.ts");

test("SEO architecture contains the strategic page slugs", () => {
  [
    "construction-piscine-maroc",
    "entretien-piscine-maroc",
    "electricite-plomberie-piscine-maroc",
    "equipement-piscine-maroc",
    "traitement-piscine-maroc",
    "traitement-piscine-sans-chlore",
    "fontaines-maroc",
    "spa-jacuzzi-maroc",
    "sauna-hammam-maroc",
    "mur-eau-maroc",
    "contact",
  ].forEach((slug) => assert.match(pagesSource, new RegExp(`slug: "${slug}"`)));
});

test("content avoids unconfirmed vanity numbers and public prices", () => {
  assert.doesNotMatch(pagesSource, /\+15 ans|500\+|800 DH|1 200 DH|1 800 DH/);
});

test("canonical site URL and contact details are centrally configured", () => {
  assert.match(configSource, /url: "https:\/\/piscineexpertpool\.com"/);
  assert.doesNotMatch(configSource, /NEXT_PUBLIC_SITE_URL/);
  assert.match(configSource, /NEXT_PUBLIC_PHONE/);
  assert.match(configSource, /NEXT_PUBLIC_WHATSAPP/);
  assert.match(configSource, /NEXT_PUBLIC_EMAIL/);
});

test("canonical production domain is centralized", () => {
  assert.match(configSource, /https:\/\/piscineexpertpool\.com/);
  assert.doesNotMatch(configSource, /expert-pool-maroc\.com/);
});

test("image assignments use optimized local assets", () => {
  assert.match(imageSource, /construction-piscine-maroc\.webp/);
  assert.match(imageSource, /fontaine-architecturale-maroc\.webp/);
  assert.match(imageSource, /local-technique-piscine-filtration\.webp/);
  assert.doesNotMatch(imageSource, /placeholder/);
});

test("structured data builders cover the required schema types", () => {
  for (const schema of ["Organization", "LocalBusiness", "WebSite", "BreadcrumbList", "Service"]) {
    assert.match(seoSource, new RegExp(schema));
  }
});

test("all visible hero and card photographs are uniquely assigned", () => {
  const slots = [];
  for (const page of allPages) {
    slots.push([page.slug || "home", imageAssignments.pageImages[page.slug]]);
    const sections = page.slug === "services" ? [6] : page.sections.map((section) => section.items.length);
    sections.forEach((size, sectionIndex) => {
      assert.equal(imageAssignments.cardImages[page.slug]?.[sectionIndex]?.length, size);
      for (let itemIndex = 0; itemIndex < size; itemIndex++) {
        slots.push([`${page.slug}/${sectionIndex}/${itemIndex}`, imageAssignments.cardImages[page.slug][sectionIndex][itemIndex]]);
      }
    });
  }
  assert.equal(slots.length, 116);
  assert.equal(new Set(slots.map((slot) => slot[1])).size, slots.length);
  for (const [slot, path] of slots) {
    assert.ok(existsSync(new URL(`../public${path}`, import.meta.url)), `Missing ${slot}: ${path}`);
  }
});

test("confirmed client contact details are present", () => {
  assert.match(configSource, /\+212 660 628 760/);
  assert.match(configSource, /contact@expertpool\.ma/);
  assert.match(configSource, /service@expertpool\.ma/);
});
