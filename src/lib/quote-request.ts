import { isMoroccanPhone } from "./contact";

export type QuoteRequest = {
  name: string; phone: string; email: string; city: string;
  projectType: string; message: string; source: string; website: string;
};

export function validateQuote(value: unknown): QuoteRequest | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const get = (key: string) => typeof input[key] === "string" ? (input[key] as string).trim() : "";
  const quote = {
    name: get("name"), phone: get("phone"), email: get("email"), city: get("city"),
    projectType: get("projectType"), message: get("message"), source: get("source"), website: get("website"),
  };
  if (quote.name.length < 2 || quote.name.length > 120 || !isMoroccanPhone(quote.phone) ||
    quote.phone.length > 30 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quote.email) || quote.email.length > 254 ||
    !quote.city || quote.city.length > 120 || !quote.projectType || quote.projectType.length > 120 ||
    !quote.message || quote.message.length > 5000 || quote.source.length > 500) return null;
  return quote;
}

export function quoteEmail(quote: QuoteRequest, date = new Date()) {
  const safe = (value: string) => value.replace(/[\r\n]+/g, " ");
  return {
    subject: `Demande de devis - Expert Pool Maroc - ${safe(quote.projectType)}`,
    text: `Nouvelle demande reçue depuis piscineexpertpool.com\n\nNom :\n${quote.name}\n\nTéléphone :\n${quote.phone}\n\nEmail :\n${quote.email}\n\nVille :\n${quote.city}\n\nProjet :\n${quote.projectType}\n\nMessage :\n${quote.message}\n\nPage d'origine :\n${quote.source || "Contact"}\n\nDate :\n${date.toISOString()}`,
  };
}
