const editorial = (name: string) => `/images/editorial/${name}.webp`;
const legacy = (name: string) => `/images/legacy/${name}.webp`;

const pageImages: Record<string, string> = {
  "": editorial("hero-home"),
  piscines: editorial("hero-pools"),
  "construction-piscine-maroc": editorial("hero-construction"),
  "renovation-piscine-maroc": editorial("hero-renovation"),
  "entretien-piscine-maroc": "/images/entretien/entretien-piscine-technicien-maroc.webp",
  "contrat-entretien-piscine": editorial("hero-maintenance-contract"),
  "fontaines-maroc": "/images/fontaine/fontaine-architecturale-maroc.webp",
  "mur-eau-maroc": editorial("hero-water-wall"),
  "spa-jacuzzi-maroc": "/images/spa/spa-jacuzzi-villa-maroc.webp",
  "sauna-hammam-maroc": "/images/sauna-hammam/sauna-hammam-maroc.webp",
  "electricite-plomberie-piscine-maroc": "/images/technique/local-technique-piscine-filtration.webp",
  "local-technique-piscine": editorial("hero-technical"),
  "chauffage-piscine-maroc": editorial("hero-heating"),
  "deshumidification-piscine": editorial("hero-indoor-climate"),
  "equipement-piscine-maroc": editorial("hero-equipment"),
  "traitement-piscine-maroc": editorial("hero-treatment"),
  "traitement-piscine-sans-chlore": editorial("hero-no-chlorine"),
  "traitement-piscine-biologique": editorial("hero-biological"),
  services: editorial("hero-services"),
  realisations: editorial("hero-projects"),
  "a-propos": editorial("hero-about"),
  contact: editorial("hero-contact"),
  conseils: editorial("hero-advice"),
};

const cardImages: Record<string, string[][]> = {
  "": [[
    legacy("expert-pool-service-piscines"), legacy("expert-pool-service-fontaines"),
    legacy("expert-pool-service-spa"), editorial("sauna-interior"),
    legacy("expert-pool-service-electricite-plomberie"), "/images/equipements/equipements-piscine-maroc.webp",
    "/images/traitement/traitement-uv-piscine-maroc.webp", legacy("expert-pool-service-maintenance"),
  ]],
  piscines: [
    [editorial("pool-design"), editorial("pool-site"), editorial("pool-renovation"), editorial("maintenance-clean")],
    [editorial("card-overflow"), editorial("pool-family"), editorial("pool-indoor"), editorial("pool-mirror")],
  ],
  "construction-piscine-maroc": [[editorial("card-architect"), editorial("card-hydraulics"), editorial("card-concrete"), editorial("pool-commission")]],
  "entretien-piscine-maroc": [
    [editorial("card-care-basic"), editorial("maintenance-test"), editorial("maintenance-filter"), editorial("maintenance-winter")],
    [editorial("card-maint-contract"), editorial("card-care-comfort"), editorial("card-care-premium")],
  ],
  "electricite-plomberie-piscine-maroc": [[editorial("technical-pumps"), editorial("technical-filter"), editorial("technical-electric"), editorial("technical-auto")]],
  "equipement-piscine-maroc": [[editorial("card-circulation"), editorial("card-filter-media"), editorial("heat-pump"), editorial("equipment-robot")]],
  "traitement-piscine-maroc": [[editorial("card-water-sample"), editorial("water-balance"), editorial("uv-system"), editorial("card-regulation")]],
  "traitement-piscine-sans-chlore": [[editorial("card-uv-lamp"), editorial("oxygen-treatment"), legacy("traitement-eau"), editorial("card-eco-limits")]],
  "fontaines-maroc": [[editorial("fountain-decorative"), editorial("card-fountain-hotel"), editorial("fountain-jets"), editorial("fountain-maintenance")]],
  "spa-jacuzzi-maroc": [[editorial("card-spa-plans"), editorial("spa-install"), editorial("spa-indoor"), editorial("spa-care")]],
  "sauna-hammam-maroc": [[editorial("card-hammam-plan"), editorial("sauna-install"), editorial("hammam-renovation"), editorial("card-sauna-care")]],
  "mur-eau-maroc": [[editorial("water-wall"), editorial("card-water-wall-pump"), editorial("card-water-wall-light"), editorial("card-water-wall-clean")]],
  "chauffage-piscine-maroc": [[editorial("card-heating-design"), legacy("expert-pool-service-climatisation"), editorial("card-heating-controls")]],
  "deshumidification-piscine": [[editorial("card-hall-comfort"), editorial("card-building-protection"), editorial("card-climate-coordination")]],
  "renovation-piscine-maroc": [[editorial("card-renovation-diagnostic"), editorial("card-renovation-plant"), editorial("card-renovation-tiling")]],
  "contrat-entretien-piscine": [[editorial("card-pool-service"), editorial("card-premium-care"), editorial("card-care-plan")]],
  "local-technique-piscine": [[editorial("card-tech-pump"), editorial("card-tech-filter"), editorial("card-tech-treatment"), editorial("card-tech-cabinet")]],
  "traitement-piscine-biologique": [[editorial("water-natural"), editorial("card-eco-filtration"), editorial("card-biological-care")]],
  services: [[
    "/images/piscine/construction-piscine-maroc.webp", editorial("card-water-jets"),
    editorial("spa-outdoor"), editorial("hammam-interior"),
    editorial("card-pipework"), editorial("card-oxygen"),
  ]],
  realisations: [[editorial("card-realisations-pool"), editorial("card-realisations-fountain"), editorial("card-realisations-tech")]],
  "a-propos": [[editorial("card-about-mission"), editorial("card-about-method"), editorial("card-about-transparency")]],
  conseils: [[editorial("card-guide-build"), editorial("card-guide-care"), editorial("card-guide-pump")]],
};

export function imageForPage(slug: string) {
  const image = pageImages[slug];
  if (!image) throw new Error(`Missing hero image for ${slug}`);
  return image;
}

export function imageForCard(slug: string, sectionIndex: number, itemIndex: number) {
  const image = cardImages[slug]?.[sectionIndex]?.[itemIndex];
  if (!image) throw new Error(`Missing card image for ${slug}/${sectionIndex}/${itemIndex}`);
  return image;
}

export const imageAssignments = { pageImages, cardImages };
