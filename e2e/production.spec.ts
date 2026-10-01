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
      await expect(link).toHaveAttribute("href", /^\/contact\?source=.+#formulaire-devis$/);
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
  await page.getByRole("button", { name: "Envoyer ma demande" }).click();
  await expect(page.locator('input[name="name"]')).toBeFocused();
});

test("API devis rejette les données invalides et ne confirme pas sans provider", async ({ request }) => {
  const valid = { name: "Test Site Expert Pool", phone: "+212660628760", email: "test@example.com", city: "Casablanca", projectType: "Test formulaire", message: "Test d'envoi réel depuis le site.", source: "/contact", website: "" };
  for (const payload of [{ ...valid, name: "" }, { ...valid, email: "bad" }, { ...valid, phone: "123" }]) {
    expect((await request.post("/api/quote", { data: payload })).status()).toBe(400);
  }
  const response = await request.post("/api/quote", { data: valid });
  expect(response.status()).toBe(503);
  expect((await response.json()).ok).not.toBe(true);
});

test("double clic et erreur provider affichent une erreur sans succès", async ({ page }) => {
  await page.goto("/contact?projet=Fontaine");
  await expect(page.locator('select[name="projectType"]')).toHaveValue("Fontaine");
  await page.locator('input[name="name"]').fill("Test Site Expert Pool");
  await page.locator('input[name="phone"]').fill("+212660628760");
  await page.locator('input[name="email"]').fill("test@example.com");
  await page.locator('input[name="city"]').fill("Casablanca");
  await page.locator('textarea[name="message"]').fill("Test d'envoi réel depuis le site.");
  let calls = 0;
  await page.route("**/api/quote", async (route) => {
    calls++;
    await new Promise((resolve) => setTimeout(resolve, 300));
    await route.fulfill({ status: 502, contentType: "application/json", body: JSON.stringify({ error: "Envoi impossible" }) });
  });
  const button = page.getByRole("button", { name: "Envoyer ma demande" });
  await button.dblclick();
  await expect(page.locator(".formError")).toContainText("Une erreur est survenue");
  expect(calls).toBe(1);
  await expect(page.getByText("Votre demande a été envoyée avec succès.")).toHaveCount(0);
});

for (const [route, project] of [
  ["/entretien-piscine-maroc", "Entretien piscine"],
  ["/fontaines-maroc", "Fontaine"],
  ["/spa-jacuzzi-maroc", "Spa & Jacuzzi"],
  ["/electricite-plomberie-piscine-maroc", "Électricité & Plomberie piscine"],
  ["/equipement-piscine-maroc", "Matériel & équipements piscine"],
] as const) {
  test(`liens devis contextualisés ${route}`, async ({ page }) => {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      const links = page.locator('a.goldButton[href^="/contact?"]').filter({ hasText: "Demander un devis" });
      expect(await links.count()).toBeGreaterThanOrEqual(2);
      for (const link of await links.all()) {
        const url = new URL((await link.getAttribute("href"))!, "https://piscineexpertpool.com");
        expect(url.searchParams.get("projet")).toBe(project);
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
