import Link from "next/link";
import { navItems } from "@/content/pages";
import { Logo } from "./Logo";
import { MessageCircle, Menu } from "lucide-react";
import { whatsappHref } from "@/config/site";

export function Header() {
  return (
    <>
    <header className="siteHeader">
      <a href="#contenu" className="skipLink">
        Aller au contenu
      </a>
      <div className="headerInner">
        <Logo />
        <nav className="desktopNav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="goldButton small" href="/contact">
          Demander un devis
        </Link>
        <details className="mobileNav">
          <summary aria-label="Ouvrir le menu" title="Menu"><Menu size={23} /></summary>
          <div>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="goldButton" href="/contact">
              Demander un devis
            </Link>
            <a href="tel:+212660628760">+212 660 628 760</a>
          </div>
        </details>
      </div>
    </header>
    <a className="whatsappFloat" href={whatsappHref("Bonjour Expert Pool Maroc, je souhaite discuter de mon projet.")} target="_blank" rel="noopener noreferrer" aria-label="Contacter Expert Pool Maroc sur WhatsApp" title="Écrire sur WhatsApp"><MessageCircle size={24} strokeWidth={2.2} /></a>
    </>
  );
}
