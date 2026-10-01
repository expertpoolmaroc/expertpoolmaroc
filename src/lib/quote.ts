export const projectForPath: Record<string, string> = {
  "/piscines": "Piscine", "/construction-piscine-maroc": "Construction piscine",
  "/renovation-piscine-maroc": "Rénovation piscine", "/entretien-piscine-maroc": "Entretien piscine",
  "/contrat-entretien-piscine": "Entretien piscine", "/fontaines-maroc": "Fontaine",
  "/mur-eau-maroc": "Fontaine", "/spa-jacuzzi-maroc": "Spa & Jacuzzi",
  "/sauna-hammam-maroc": "Sauna & Hammam",
  "/electricite-plomberie-piscine-maroc": "Électricité & Plomberie piscine",
  "/equipement-piscine-maroc": "Matériel & équipements piscine",
  "/local-technique-piscine": "Matériel & équipements piscine",
  "/traitement-piscine-maroc": "Traitement piscine",
  "/traitement-piscine-sans-chlore": "Traitement piscine",
  "/traitement-piscine-biologique": "Traitement piscine",
  "/chauffage-piscine-maroc": "Chauffage piscine",
  "/deshumidification-piscine": "Déshumidification piscine",
};

export function quoteHref(pathname: string | null) {
  const path = pathname?.replace(/\/$/, "") || "/";
  const params = new URLSearchParams({ source: path });
  if (projectForPath[path]) params.set("projet", projectForPath[path]);
  return `/contact?${params.toString()}#formulaire-devis`;
}
