import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = ["/", "/piscines", "/construction-piscine-maroc", "/renovation-piscine-maroc", "/entretien-piscine-maroc", "/contrat-entretien-piscine", "/fontaines-maroc", "/mur-eau-maroc", "/spa-jacuzzi-maroc", "/sauna-hammam-maroc", "/electricite-plomberie-piscine-maroc", "/chauffage-piscine-maroc", "/deshumidification-piscine", "/equipement-piscine-maroc", "/local-technique-piscine", "/traitement-piscine-maroc", "/traitement-piscine-sans-chlore", "/traitement-piscine-biologique", "/services", "/realisations", "/a-propos", "/contact", "/conseils"];

for (const route of routes) {
  test(`SEO et rendu ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => message.type() === "error" && errors.push(message.text()));
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page).toHaveTitle(/Expert Pool Maroc/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`^https://piscineexpertpool\\.com`));
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", new RegExp(`^https://piscineexpertpool\\.com`));
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.length).toBeGreaterThan(0);
    schemas.forEach((schema) => expect(() => JSON.parse(schema)).not.toThrow());
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(errors.filter((error) => /hydration|failed to load/i.test(error))).toEqual([]);
    const quoteLinks = page.locator("a.goldButton").filter({ hasText: /^Demander un devis/ });
    for (const link of await quoteLinks.all()) {
      await expect(link).toHaveAttribute("href", /^mailto:contact@expertpool\.ma\?subject=.+&body=.+/);
    }
  });
}

test("navigation desktop, retour et route profonde", async ({ page }) => {
  await page.goto("/");
  await page.locator(".desktopNav").getByRole("link", { name: "Piscines", exact: true }).click();
  await expect(page).toHaveURL(/\/piscines$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await page.goto("/electricite-plomberie-piscine-maroc");
  await page.reload();
  await expect(page.locator("h1")).toContainText("plomberie");
});

test("menu mobile et CTA", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator(".mobileNav summary").click();
  await expect(page.locator(".mobileNav").getByRole("link", { name: "Contact" })).toBeVisible();
  await page.locator(".mobileNav").getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/contact$/);
});

test("validation du formulaire de contact", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Envoyer via WhatsApp" }).click();
  await expect(page.locator('input[name="name"]')).toBeFocused();
});

for (const [route, expectedSubject] of [
  ["/", "Demande de devis - Expert Pool Maroc"],
  ["/construction-piscine-maroc", "Demande de devis construction piscine - Expert Pool Maroc"],
  ["/entretien-piscine-maroc", "Demande de devis entretien piscine - Expert Pool Maroc"],
  ["/equipement-piscine-maroc", "Demande de devis équipements piscine - Expert Pool Maroc"],
  ["/spa-jacuzzi-maroc", "Demande de devis Spa et Jacuzzi - Expert Pool Maroc"],
] as const) {
  test(`liens devis contextualisés ${route} sur desktop et mobile`, async ({ page }) => {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const visibleLinks = page.locator('a.goldButton[href^="mailto:"]').filter({ hasText: "Demander un devis" });
      expect(await visibleLinks.count()).toBeGreaterThanOrEqual(2);
      for (const link of await visibleLinks.all()) {
        const url = new URL((await link.getAttribute("href"))!);
        expect(url.pathname).toBe("contact@expertpool.ma");
        expect(url.searchParams.get("subject")).toBe(expectedSubject);
        expect(url.searchParams.get("body")).toContain("Page : ");
      }
      await expect(page.locator(".whatsappFloat")).toHaveAttribute("href", /wa\.me\/212660628760/);
    }
  });
}

for (const width of [320, 360, 375, 390, 412, 430, 768, 1024, 1280, 1366, 1440, 1920]) {
  test(`aucun débordement horizontal à ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 768 ? 900 : 1000 });
    await page.goto("/", { waitUntil: "networkidle" });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

for (const route of ["/", "/construction-piscine-maroc", "/entretien-piscine-maroc", "/equipement-piscine-maroc", "/contact"]) {
  test(`axe ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    const result = await new AxeBuilder({ page }).analyze();
    expect(result.violations.filter((item) => ["critical", "serious"].includes(item.impact ?? ""))).toEqual([]);
  });
}

test("404 réelle et non indexable", async ({ page }) => {
  const response = await page.goto("/abc-page-inexistante-123");
  expect(response?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
});

test("sitemap et robots utilisent le domaine canonique", async ({ request }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  expect((xml.match(/<url>/g) ?? []).length).toBe(23);
  expect(xml).toContain("https://piscineexpertpool.com/construction-piscine-maroc");
  expect(xml).not.toContain("localhost");
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("https://piscineexpertpool.com/sitemap.xml");
});

test("anciennes routes connues redirigent en une étape", async ({ request }) => {
  const mappings = [["/piscines-spa-bien-etre", "/piscines"], ["/fontaines-bassins", "/fontaines-maroc"], ["/traitement-eaux-equipements", "/traitement-piscine-maroc"], ["/installations-techniques", "/local-technique-piscine"], ["/realisations-contact", "/realisations"]];
  for (const [source, destination] of mappings) {
    const response = await request.get(source, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(destination);
  }
});

test("liens internes et images répondent sans erreur", async ({ page, request }) => {
  const urls = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    for (const value of await page.locator('a[href^="/"], img[src^="/"]').evaluateAll((nodes) => nodes.map((node) => ({ value: node.getAttribute(node.tagName === "IMG" ? "src" : "href"), image: node.tagName === "IMG" })).filter((item) => item.value) as { value: string; image: boolean }[])) urls.add(value.image ? value.value : value.value.split("?")[0]);
  }
  for (const url of urls) {
    const response = await request.get(url);
    expect(response.status(), url).toBeLessThan(400);
  }
});
