import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navItems } from "@/content/pages";
import { Logo } from "./Logo";
import { QuoteLink } from "./QuoteLink";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Logo />
          <p>
            Votre partenaire pour des piscines, fontaines, spas et installations techniques concues avec exigence au Maroc.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Services</h2>
          <Link href="/construction-piscine-maroc">Construction piscine</Link>
          <Link href="/entretien-piscine-maroc">Entretien piscine</Link>
          <Link href="/equipement-piscine-maroc">Equipements</Link>
          <Link href="/traitement-piscine-maroc">Traitement de l&apos;eau</Link>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:+212660628760">{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`mailto:${siteConfig.serviceEmail}`}>{siteConfig.serviceEmail}</a>
          {siteConfig.address ? <p>{siteConfig.address}</p> : null}
          <QuoteLink className="goldButton small">
            Demander un devis
          </QuoteLink>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} Expert Pool Maroc.</span>
        <span>Bd Lalla Yacout N°17, 4e étage, Casablanca</span>
      </div>
    </footer>
  );
}
