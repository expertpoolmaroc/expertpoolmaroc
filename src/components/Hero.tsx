import Image from "next/image";
import Link from "next/link";
import type { LandingPage } from "@/content/pages";
import { imageForPage } from "@/content/images";
import { quoteHref } from "@/lib/quote";

export function Hero({ page }: { page: LandingPage }) {
  return (
    <section className="hero">
      <Image
        src={imageForPage(page.slug)}
        alt={page.heroAlt}
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        className="heroImage"
      />
      <div className="heroOverlay" />
      <div className="container heroContent">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.h1}</h1>
        <p>{page.description}</p>
        <div className="heroActions">
          {page.cta.startsWith("Demander un devis") ? (
            <a className="goldButton" href={quoteHref(page.slug ? `/${page.slug}` : "/")}>{page.cta}</a>
          ) : (
            <Link className="goldButton" href={`/contact?projet=${encodeURIComponent(page.slug || "piscine-maroc")}`}>{page.cta}</Link>
          )}
          {page.secondaryCta ? (
            <Link className="outlineButton" href={page.secondaryCta.toLowerCase().includes("realisation") ? "/realisations" : "/services"}>
              {page.secondaryCta}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
