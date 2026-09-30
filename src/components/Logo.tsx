import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Expert Pool Maroc - Accueil">
      <Image src="/images/expert-pool-header.webp" alt="Expert Pool Maroc" width={185} height={57} priority />
    </Link>
  );
}
