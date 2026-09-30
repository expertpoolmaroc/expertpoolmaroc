export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  message: string;
};

export function isMoroccanPhone(phone: string) {
  const clean = phone.replace(/[\s().-]/g, "");
  return /^(?:\+?212|0)[5-7]\d{8}$/.test(clean);
}

export function buildWhatsAppMessage(input: ContactInput) {
  return [
    "Bonjour Expert Pool Maroc,",
    "je souhaite obtenir des informations pour un projet.",
    `Nom: ${input.name}`,
    `Telephone: ${input.phone}`,
    `Email: ${input.email}`,
    `Ville: ${input.city}`,
    `Type de projet: ${input.projectType}`,
    `Message: ${input.message}`,
  ].join("\n");
}
