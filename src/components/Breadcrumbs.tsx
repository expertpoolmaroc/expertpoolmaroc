import Link from "next/link";
import type { LandingPage } from "@/content/pages";

export function Breadcrumbs({ page }: { page: LandingPage }) {
  if (!page.slug) return null;
  const parent = page.kind === "service" ? { label: "Services", href: "/services" } : null;
  return (
    <nav className="breadcrumbs container" aria-label="Fil d'Ariane">
      <Link href="/">Accueil</Link>
      <span aria-hidden="true">/</span>
      {parent ? <><Link href={parent.href}>{parent.label}</Link><span aria-hidden="true">/</span></> : null}
      <span aria-current="page">{page.h1}</span>
    </nav>
  );
}
