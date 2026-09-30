const steps = [
  ["01", "Etude & conseil", "Analyse de vos besoins, contraintes et objectifs."],
  ["02", "Conception", "Choix techniques, implantation et solutions adaptees."],
  ["03", "Construction", "Execution coordonnee et attention aux details."],
  ["04", "Installation", "Equipements, hydraulique, electricite et raccordements."],
  ["05", "Mise en service", "Controles, reglages et explications d'usage."],
  ["06", "Entretien / SAV", "Suivi, maintenance preventive et assistance."],
];

export function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="sectionHead">
          <p className="kicker">Un accompagnement complet</p>
          <h2>De l&apos;etude a la mise en service</h2>
        </div>
        <div className="processGrid">
          {steps.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
