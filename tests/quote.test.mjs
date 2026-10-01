import assert from "node:assert/strict";
import test from "node:test";
import { quoteHref } from "../src/lib/quote.ts";

test("quote links lead to the form with the matching project", () => {
  for (const [path, project] of Object.entries({
    "/entretien-piscine-maroc": "Entretien piscine",
    "/fontaines-maroc": "Fontaine",
    "/spa-jacuzzi-maroc": "Spa & Jacuzzi",
    "/electricite-plomberie-piscine-maroc": "Électricité & Plomberie piscine",
    "/equipement-piscine-maroc": "Matériel & équipements piscine",
  })) {
    const url = new URL(quoteHref(path), "https://piscineexpertpool.com");
    assert.equal(url.pathname, "/contact");
    assert.equal(url.searchParams.get("source"), path);
    assert.equal(url.searchParams.get("projet"), project);
    assert.equal(url.hash, "#formulaire-devis");
  }
  assert.equal(quoteHref("/piscines/"), quoteHref("/piscines"));
});
