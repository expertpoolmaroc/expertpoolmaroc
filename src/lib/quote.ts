type QuoteContext = { subject: string; service: string; page: string };

const contexts: Record<string, QuoteContext> = {
  "/": { subject: "Demande de devis - Expert Pool Maroc", service: "mon projet", page: "Accueil" },
  "/piscines": { subject: "Demande de devis piscine - Expert Pool Maroc", service: "une piscine", page: "Piscines" },
  "/construction-piscine-maroc": { subject: "Demande de devis construction piscine - Expert Pool Maroc", service: "la construction d'une piscine", page: "Construction piscine" },
  "/renovation-piscine-maroc": { subject: "Demande de devis rénovation piscine - Expert Pool Maroc", service: "la rénovation d'une piscine", page: "Rénovation piscine" },
  "/entretien-piscine-maroc": { subject: "Demande de devis entretien piscine - Expert Pool Maroc", service: "l'entretien d'une piscine", page: "Entretien piscine" },
  "/contrat-entretien-piscine": { subject: "Demande de devis contrat d'entretien piscine - Expert Pool Maroc", service: "un contrat d'entretien piscine", page: "Contrat d'entretien piscine" },
  "/fontaines-maroc": { subject: "Demande de devis fontaine - Expert Pool Maroc", service: "une fontaine", page: "Fontaines" },
  "/mur-eau-maroc": { subject: "Demande de devis mur d'eau - Expert Pool Maroc", service: "un mur d'eau", page: "Mur d'eau" },
  "/spa-jacuzzi-maroc": { subject: "Demande de devis Spa et Jacuzzi - Expert Pool Maroc", service: "un spa ou jacuzzi", page: "Spa & Jacuzzi" },
  "/sauna-hammam-maroc": { subject: "Demande de devis Sauna et Hammam - Expert Pool Maroc", service: "un sauna ou hammam", page: "Sauna & Hammam" },
  "/electricite-plomberie-piscine-maroc": { subject: "Demande de devis installation technique piscine - Expert Pool Maroc", service: "une installation technique piscine", page: "Électricité & Plomberie" },
  "/equipement-piscine-maroc": { subject: "Demande de devis équipements piscine - Expert Pool Maroc", service: "des équipements piscine", page: "Équipements piscine" },
  "/traitement-piscine-maroc": { subject: "Demande de devis traitement piscine - Expert Pool Maroc", service: "le traitement d'une piscine", page: "Traitement piscine" },
  "/traitement-piscine-sans-chlore": { subject: "Demande de devis traitement piscine sans chlore - Expert Pool Maroc", service: "un traitement piscine sans chlore traditionnel", page: "Traitement sans chlore" },
  "/traitement-piscine-biologique": { subject: "Demande de devis traitement piscine biologique - Expert Pool Maroc", service: "un traitement piscine biologique", page: "Traitement biologique" },
  "/local-technique-piscine": { subject: "Demande de devis local technique piscine - Expert Pool Maroc", service: "un local technique piscine", page: "Local technique" },
  "/chauffage-piscine-maroc": { subject: "Demande de devis chauffage piscine - Expert Pool Maroc", service: "le chauffage d'une piscine", page: "Chauffage piscine" },
  "/deshumidification-piscine": { subject: "Demande de devis déshumidification piscine - Expert Pool Maroc", service: "la déshumidification d'une piscine", page: "Déshumidification piscine" },
  "/services": { subject: "Demande de devis services - Expert Pool Maroc", service: "vos services", page: "Services" },
  "/realisations": { subject: "Demande de devis projet - Expert Pool Maroc", service: "un projet similaire", page: "Réalisations" },
  "/a-propos": { subject: "Demande de devis - Expert Pool Maroc", service: "mon projet", page: "À propos" },
  "/conseils": { subject: "Demande de devis - Expert Pool Maroc", service: "mon projet", page: "Conseils" },
  "/contact": { subject: "Demande de devis - Expert Pool Maroc", service: "mon projet", page: "Contact" },
};

export function quoteMailto(pathname: string | null) {
  const path = pathname?.replace(/\/$/, "") || "/";
  const context = contexts[path] ?? contexts["/"];
  const body = `Bonjour Expert Pool Maroc,\n\nJe souhaite obtenir un devis concernant ${context.service}.\nPage : ${context.page}`;
  return `mailto:contact@expertpool.ma?subject=${encodeURIComponent(context.subject)}&body=${encodeURIComponent(body)}`;
}
