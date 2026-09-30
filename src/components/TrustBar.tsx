const items = [
  ["Sur mesure", "pour particuliers et professionnels"],
  ["Etude technique", "avant recommandation"],
  ["SAV", "accompagnement et suivi"],
  ["Maroc", "intervention a confirmer par zone"],
];

export function TrustBar() {
  return (
    <section className="trustBar" aria-label="Points de confiance">
      <div className="container trustGrid">
        {items.map(([title, text]) => (
          <div key={title}>
            <span aria-hidden="true">◇</span>
            <strong>{title}</strong>
            <small>{text}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
