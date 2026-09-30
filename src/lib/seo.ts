import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import type { LandingPage } from "@/content/pages";
import { imageForPage } from "@/content/images";
import { businessConfig } from "@/config/business";

export function pageMetadata(page: LandingPage): Metadata {
  const path = page.slug ? `/${page.slug}` : "/";
  const title = `${page.title} | ${siteConfig.name}`;
  const description = page.description;

  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "fr_MA",
      type: "website",
      images: [{ url: absoluteUrl(imageForPage(page.slug)), width: 1536, height: 1024, alt: page.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(imageForPage(page.slug))],
    },
  };
}

export function serviceJsonLd(page: LandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": page.kind === "contact" ? "ContactPage" : "Service",
    name: page.h1,
    description: page.description,
    areaServed: "MA",
    provider: {
      "@type": "LocalBusiness",
      name: businessConfig.businessName,
      url: siteConfig.url,
      telephone: businessConfig.phone || undefined,
      email: businessConfig.email || undefined,
      address: businessConfig.address || undefined,
      areaServed: businessConfig.serviceAreas.length ? businessConfig.serviceAreas : "MA",
      sameAs: businessConfig.socialLinks.length ? businessConfig.socialLinks : undefined,
    },
    url: absoluteUrl(page.slug ? `/${page.slug}` : "/"),
  };
}

export function breadcrumbJsonLd(page: LandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
      ...(page.slug
        ? [{ "@type": "ListItem", position: 2, name: page.h1, item: absoluteUrl(`/${page.slug}`) }]
        : []),
    ],
  };
}

export function organizationJsonLd() {
  const address = businessConfig.address
    ? {
        "@type": "PostalAddress",
        streetAddress: businessConfig.address,
        addressLocality: businessConfig.city || undefined,
        postalCode: businessConfig.postalCode || undefined,
        addressCountry: businessConfig.country,
      }
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: businessConfig.businessName,
    legalName: businessConfig.legalName || undefined,
    url: siteConfig.url,
    logo: absoluteUrl("/images/expert-pool-header.webp"),
    telephone: businessConfig.phone || undefined,
    email: businessConfig.email || undefined,
    address,
    areaServed: businessConfig.serviceAreas.length ? businessConfig.serviceAreas : "MA",
    openingHours: businessConfig.openingHours || undefined,
    sameAs: businessConfig.socialLinks.length ? businessConfig.socialLinks : undefined,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "fr-MA",
  };
}
