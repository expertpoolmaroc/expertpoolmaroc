export const businessConfig = {
  businessName: "Expert Pool Maroc",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+212 660 628 760",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+212660628760",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "contact@expertpool.ma",
  serviceEmail: "service@expertpool.ma",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "Bd Lalla Yacout N°17, 4e étage, Casablanca, Maroc",
  city: process.env.NEXT_PUBLIC_CITY ?? "Casablanca",
  postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE ?? "",
  country: "MA",
  openingHours: process.env.NEXT_PUBLIC_OPENING_HOURS ?? "",
  serviceAreas: (process.env.NEXT_PUBLIC_SERVICE_AREAS ?? "")
    .split(",")
    .map((area) => area.trim())
    .filter(Boolean),
  socialLinks: (process.env.NEXT_PUBLIC_SOCIAL_LINKS ?? "")
    .split(",")
    .map((link) => link.trim())
    .filter(Boolean),
  googleBusinessProfile: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE ?? "",
} as const;
