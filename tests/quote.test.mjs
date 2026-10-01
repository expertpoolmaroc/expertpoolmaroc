import assert from "node:assert/strict";
import test from "node:test";
import { quoteMailto } from "../src/lib/quote.ts";

const subjects = {
  "/": "Demande de devis - Expert Pool Maroc",
  "/piscines": "Demande de devis piscine - Expert Pool Maroc",
  "/construction-piscine-maroc": "Demande de devis construction piscine - Expert Pool Maroc",
  "/entretien-piscine-maroc": "Demande de devis entretien piscine - Expert Pool Maroc",
  "/fontaines-maroc": "Demande de devis fontaine - Expert Pool Maroc",
  "/spa-jacuzzi-maroc": "Demande de devis Spa et Jacuzzi - Expert Pool Maroc",
  "/sauna-hammam-maroc": "Demande de devis Sauna et Hammam - Expert Pool Maroc",
  "/electricite-plomberie-piscine-maroc": "Demande de devis installation technique piscine - Expert Pool Maroc",
  "/equipement-piscine-maroc": "Demande de devis équipements piscine - Expert Pool Maroc",
  "/traitement-piscine-maroc": "Demande de devis traitement piscine - Expert Pool Maroc",
};

test("quote email uses the exact recipient and contextual encoded subject", () => {
  for (const [path, subject] of Object.entries(subjects)) {
    const href = quoteMailto(path);
    assert.ok(href.startsWith(`mailto:contact@expertpool.ma?subject=${encodeURIComponent(subject)}&body=`), path);
    const url = new URL(href);
    assert.equal(url.searchParams.get("subject"), subject);
    assert.match(url.searchParams.get("body"), /Bonjour Expert Pool Maroc,\n\nJe souhaite obtenir un devis concernant .+\nPage : .+/);
  }
});

test("quote email falls back to the homepage context", () => {
  assert.equal(quoteMailto(null), quoteMailto("/"));
  assert.equal(quoteMailto("/piscines/"), quoteMailto("/piscines"));
});
