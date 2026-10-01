import { QuoteLink } from "./QuoteLink";

export function CTA() {
  return (
    <section className="ctaBand">
      <div className="container">
        <div>
        <p className="kicker">Un projet ?</p>
          <h2>Discutons d&apos;une solution adaptee a votre espace</h2>
        </div>
        <QuoteLink className="goldButton">
          Demander un devis
        </QuoteLink>
      </div>
    </section>
  );
}
