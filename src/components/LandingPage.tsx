import type { LandingPage as LandingPageType } from "@/content/pages";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { CTA } from "./CTA";
import { ContactForm } from "./ContactForm";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { PageSections } from "./Section";
import { Process } from "./Process";
import { TrustBar } from "./TrustBar";
import { Breadcrumbs } from "./Breadcrumbs";

export function LandingPage({ page }: { page: LandingPageType }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(page)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(page)) }} />
      <Hero page={page} />
      <Breadcrumbs page={page} />
      <TrustBar />
      {page.kind === "contact" ? <ContactForm /> : <PageSections page={page} />}
      <Process />
      <FAQ page={page} />
      <CTA />
    </>
  );
}
