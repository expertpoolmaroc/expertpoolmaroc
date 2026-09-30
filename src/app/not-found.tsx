import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="notFound">
      <div className="container">
        <p className="eyebrow">Page introuvable</p>
        <h1>Cette page n&apos;existe pas ou a ete deplacee</h1>
        <p>Retrouvez les pages principales du site Expert Pool Maroc.</p>
        <div className="heroActions">
          <Link className="goldButton" href="/">
            Accueil
          </Link>
          <Link className="outlineButton dark" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
