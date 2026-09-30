export const siteConfig = {
  name: "Expert Pool Maroc",
  tagline: "Piscines, spa, fontaines et bien-etre",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://piscineexpertpool.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+212 660 628 760",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+212660628760",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "contact@expertpool.ma",
  serviceEmail: "service@expertpool.ma",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "Bd Lalla Yacout N°17, 4e étage, Casablanca, Maroc",
  city: process.env.NEXT_PUBLIC_CITY ?? "Casablanca",
  googleVerification: process.env.GOOGLE_SITE_VERIFICATION,
  bingVerification: process.env.BING_SITE_VERIFICATION,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

export function whatsappHref(message: string) {
  const number = siteConfig.whatsapp || siteConfig.phone;
  const clean = number.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return clean ? `https://wa.me/${clean}?text=${text}` : `/contact?message=${text}`;
}
