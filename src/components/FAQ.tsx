import type { LandingPage } from "@/content/pages";

export function FAQ({ page }: { page: LandingPage }) {
  const items = page.faq?.length ? page.faq : fallbackFaq(page);

  return (
    <section className="section">
      <div className="container faq">
        <div className="sectionHead alignLeft">
          <p className="kicker">Questions frequentes</p>
          <h2>Reponses utiles</h2>
        </div>
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function fallbackFaq(page: LandingPage) {
  const specific: Record<string, { question: string; answer: string }[]> = {
    "construction-piscine-maroc": [
      { question: "Que comprend un projet de construction de piscine ?", answer: "Il comprend généralement l'étude du site, la conception, la structure, l'étanchéité, l'hydraulique, la filtration, l'électricité, le traitement puis la mise en service." },
      { question: "Pourquoi penser au local technique dès la conception ?", answer: "Son accès, sa ventilation, son dimensionnement et la disposition des équipements influencent la fiabilité et la facilité d'entretien de toute l'installation." },
    ],
    "entretien-piscine-maroc": [
      { question: "Que comprend l'entretien régulier d'une piscine ?", answer: "Le nettoyage du bassin, le contrôle de l'eau, la vérification de la filtration et l'inspection visuelle du local technique constituent la base d'un entretien régulier." },
      { question: "Quand prévoir une maintenance préventive ?", answer: "Avant la période d'utilisation intensive, après une longue fermeture ou dès qu'un débit, un bruit ou un paramètre d'eau devient inhabituel." },
    ],
    "local-technique-piscine": [
      { question: "Que contient un local technique piscine ?", answer: "Il regroupe au minimum la circulation et la filtration. Selon le projet, il peut aussi intégrer chauffage, traitement UV, dosage automatique, régulation, coffrets électriques et vannes." },
      { question: "Comment faciliter sa maintenance ?", answer: "Un espace accessible, ventilé, drainable et organisé autour de raccords et vannes identifiables simplifie les contrôles et les interventions." },
    ],
    "traitement-piscine-maroc": [
      { question: "Comment fonctionne le traitement UV d'une piscine ?", answer: "L'eau filtrée traverse une chambre équipée d'une lampe UV. Ce procédé complète la filtration et doit être dimensionné et suivi avec le reste du traitement." },
      { question: "La régulation automatique remplace-t-elle l'entretien ?", answer: "Non. Elle stabilise le dosage selon les mesures, mais le nettoyage, les contrôles manuels et la maintenance des sondes restent nécessaires." },
    ],
    "fontaines-maroc": [
      { question: "Comment entretenir une fontaine ?", answer: "Il faut contrôler la qualité de l'eau, nettoyer le bassin et les buses, surveiller les pompes, la filtration, l'éclairage et l'accessibilité des organes techniques." },
      { question: "Quels éléments sont définis pendant l'étude ?", answer: "L'effet d'eau, le débit, la hauteur des jets, le vent, le bruit, la consommation, l'éclairage et l'accès à la maintenance sont étudiés ensemble." },
    ],
    "chauffage-piscine-maroc": [
      { question: "Comment dimensionner un chauffage de piscine ?", answer: "Le volume d'eau, la température visée, la saison, l'exposition, le vent et l'usage d'une couverture déterminent la puissance et la stratégie de chauffage." },
      { question: "Une couverture réduit-elle les besoins de chauffage ?", answer: "Oui, limiter l'évaporation et les pertes nocturnes peut réduire sensiblement le besoin énergétique, selon le bassin et les conditions d'usage." },
    ],
  };
  return specific[page.slug] ?? [
    { question: `Comment préparer un projet de ${page.primaryKeyword} ?`, answer: "Commencez par préciser l'usage, le lieu, les dimensions, l'état existant, les contraintes d'accès et le niveau d'accompagnement attendu." },
    { question: "Comment obtenir une recommandation adaptée ?", answer: "Une première description du projet permet d'identifier les informations techniques à réunir avant une étude ou une visite." },
  ];
}
