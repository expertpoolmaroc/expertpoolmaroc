import Link from "next/link";

export function CTA() {
  return (
    <section className="ctaBand">
      <div className="container">
        <div>
        <p className="kicker">Un projet ?</p>
          <h2>Discutons d&apos;une solution adaptee a votre espace</h2>
        </div>
        <Link className="goldButton" href="/contact">
          Demander un devis
        </Link>
      </div>
    </section>
  );
}
