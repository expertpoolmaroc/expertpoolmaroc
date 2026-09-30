export type PageKind = "home" | "service" | "hub" | "contact" | "editorial";

export type LandingPage = {
  slug: string;
  kind: PageKind;
  navLabel?: string;
  title: string;
  h1: string;
  eyebrow: string;
  description: string;
  cta: string;
  secondaryCta?: string;
  heroAlt: string;
  primaryKeyword: string;
  variants: string[];
  sections: {
    kicker?: string;
    title: string;
    intro?: string;
    items: { title: string; text: string; href?: string }[];
  }[];
  faq?: { question: string; answer: string }[];
};


export const pages: LandingPage[] = [
  {
    slug: "",
    kind: "home",
    navLabel: "Accueil",
    title: "Piscine Maroc | Construction, entretien et équipements",
    h1: "Piscines, fontaines & espaces bien-être sur mesure",
    eyebrow: "Expertise piscine, fontaines et wellness",
    description:
      "Étude, conception, construction, installation, entretien et rénovation d'espaces aquatiques durables, élégants et adaptés aux villas, hôtels et établissements professionnels au Maroc.",
    cta: "Demander un devis",
    secondaryCta: "Voir nos realisations",
    heroAlt: "Piscine contemporaine dans une villa au Maroc",
    primaryKeyword: "piscine Maroc",
    variants: ["pisciniste Maroc", "entreprise piscine Maroc", "expert piscine Maroc"],
    sections: [
      {
        kicker: "Domaines d'expertise",
        title: "Des solutions completes pour des espaces d'exception",
        items: [
          { title: "Piscines", text: "Conception, construction, renovation et entretien de piscines sur mesure.", href: "/piscines" },
          { title: "Fontaines", text: "Fontaines decoratives, jeux d'eau et murs d'eau integres a l'architecture.", href: "/fontaines-maroc" },
          { title: "Spa & Jacuzzi", text: "Installation et integration technique pour villas, hotels et espaces wellness.", href: "/spa-jacuzzi-maroc" },
          { title: "Sauna & Hammam", text: "Espaces de detente concus avec soin, ventilation et equipements adaptes.", href: "/sauna-hammam-maroc" },
          { title: "Electricite & plomberie", text: "Locaux techniques, tableaux, pompes, filtration, vannes et raccordements.", href: "/electricite-plomberie-piscine-maroc" },
          { title: "Materiel & equipements", text: "Pompes, filtres, skimmers, robots, chauffage, regulation et accessoires.", href: "/equipement-piscine-maroc" },
          { title: "Traitement de l'eau", text: "Analyse, equilibre, UV, oxygene actif et regulation automatique.", href: "/traitement-piscine-maroc" },
          { title: "Entretien piscine", text: "Maintenance preventive, nettoyage, hivernage, remise en route et SAV.", href: "/entretien-piscine-maroc" },
        ],
      },
    ],
  },
  {
    slug: "piscines",
    kind: "hub",
    navLabel: "Piscines",
    title: "Piscines au Maroc : conception, renovation et entretien",
    h1: "Piscines sur mesure au Maroc",
    eyebrow: "Piscines privees, hotels et espaces premium",
    description:
      "Un accompagnement complet pour creer, moderniser ou entretenir une piscine elegante, fiable et adaptee a votre espace.",
    cta: "Parler de mon projet piscine",
    secondaryCta: "Voir nos realisations",
    heroAlt: "Piscine de villa contemporaine au Maroc",
    primaryKeyword: "piscine au Maroc",
    variants: ["pisciniste Maroc", "construction piscine Maroc", "renovation piscine Maroc"],
    sections: [
      {
        kicker: "Services piscine",
        title: "Nos services pour votre piscine",
        items: [
          { title: "Conception & etude", text: "Analyse du terrain, usage, contraintes techniques et recommandations personnalisees.", href: "/construction-piscine-maroc" },
          { title: "Construction", text: "Realisation coordonnee avec choix des equipements, hydraulique et mise en service.", href: "/construction-piscine-maroc" },
          { title: "Renovation", text: "Modernisation du bassin, du revetement, du local technique ou de l'etancheite.", href: "/renovation-piscine-maroc" },
          { title: "Entretien", text: "Nettoyage, controle de l'eau, filtration, hivernage, remise en route et SAV.", href: "/entretien-piscine-maroc" },
        ],
      },
      {
        kicker: "Types de piscines",
        title: "Des piscines pour tous les styles et tous les projets",
        items: [
          { title: "Piscine a debordement", text: "Une ligne d'eau elegante pour villas et lieux haut de gamme." },
          { title: "Piscine familiale", text: "Confort, securite d'usage et entretien pense des la conception." },
          { title: "Piscine interieure", text: "Coordination avec chauffage, ventilation et deshumidification." },
          { title: "Piscine miroir", text: "Esthetique epuree demandant une execution technique precise." },
        ],
      },
    ],
    faq: [
      { question: "Combien de temps dure un projet de piscine ?", answer: "La duree depend de l'etude, du type de bassin, de l'acces au chantier et des equipements choisis." },
      { question: "Proposez-vous l'entretien apres construction ?", answer: "Oui, l'entretien et le SAV font partie des prestations preparees pour assurer la durabilite de l'installation." },
    ],
  },
  {
    slug: "construction-piscine-maroc",
    kind: "service",
    title: "Construction piscine Maroc : conception et installation sur mesure",
    h1: "Conception, construction et renovation de piscines au Maroc",
    eyebrow: "Piscines sur mesure au Maroc",
    description:
      "De l'etude du projet a la mise en service, Expert Pool Maroc structure chaque etape pour concevoir une piscine fiable, durable et coherente avec votre architecture.",
    cta: "Demander une etude",
    secondaryCta: "Voir nos realisations",
    heroAlt: "Piscine sur mesure avec architecture contemporaine",
    primaryKeyword: "construction piscine Maroc",
    variants: ["constructeur piscine Maroc", "installation piscine Maroc", "conception piscine Maroc"],
    sections: [
      {
        kicker: "Accompagnement complet",
        title: "De l'idee a la mise en service",
        items: [
          { title: "Etude & conseil", text: "Definition des besoins, contraintes du site, usage, style et budget cible." },
          { title: "Conception technique", text: "Implantation, hydraulique, filtration, local technique et choix des equipements." },
          { title: "Construction", text: "Coordination des travaux avec attention a l'etancheite, aux reseaux et a la qualite d'execution." },
          { title: "Mise en service", text: "Controle, reglages, explications d'usage et preparation de l'entretien." },
        ],
      },
    ],
  },
  {
    slug: "entretien-piscine-maroc",
    kind: "service",
    navLabel: "Entretien",
    title: "Entretien piscine au Maroc et contrats de maintenance",
    h1: "Entretien piscine au Maroc & contrats de maintenance",
    eyebrow: "Maintenance piscine",
    description:
      "Nettoyage, analyse de l'eau, controle pH, filtration, hivernage, remise en route et maintenance preventive pour garder une piscine propre et performante.",
    cta: "Demander une formule personnalisee",
    secondaryCta: "Voir nos contrats",
    heroAlt: "Technicien réalisant l'entretien d'une piscine au Maroc",
    primaryKeyword: "entretien piscine Maroc",
    variants: ["maintenance piscine", "contrat entretien piscine", "nettoyage piscine"],
    sections: [
      {
        kicker: "Services d'entretien",
        title: "Une maintenance adaptee a votre piscine",
        items: [
          { title: "Nettoyage", text: "Fond, parois, ligne d'eau, paniers, skimmers et elements visibles." },
          { title: "Controle de l'eau", text: "Suivi pH, equilibre de l'eau et recommandations de traitement adaptees." },
          { title: "Filtration", text: "Verification de la circulation, du filtre, de la pompe et du local technique." },
          { title: "Hivernage & remise en route", text: "Preparation saisonniere et remise en service selon l'etat du bassin." },
        ],
      },
      {
        kicker: "Contrats",
        title: "Contrat d'entretien et de maintenance piscine",
        intro: "Chaque formule est ajustée à la taille du bassin, à son usage et à la fréquence d'intervention souhaitée.",
        items: [
          { title: "Essentiel", text: "Controle regulier, nettoyage courant et conseils d'utilisation." },
          { title: "Confort", text: "Suivi plus complet de l'eau, filtration et local technique." },
          { title: "Premium", text: "Accompagnement prioritaire, maintenance preventive et suivi personnalise." },
        ],
      },
    ],
  },
  {
    slug: "electricite-plomberie-piscine-maroc",
    kind: "service",
    title: "Electricite et plomberie piscine au Maroc",
    h1: "Electricite & plomberie piscine au Maroc",
    eyebrow: "Performance technique et securite",
    description:
      "Tableaux electriques, pompes, circulation, filtration, vannes, tuyauterie, automatisation, regulation et renovation de local technique piscine.",
    cta: "Diagnostiquer mon installation",
    secondaryCta: "Parler a un expert",
    heroAlt: "Local technique de piscine avec filtration et pompes",
    primaryKeyword: "electricite plomberie piscine Maroc",
    variants: ["local technique piscine", "tableau electrique piscine", "plomberie piscine"],
    sections: [
      {
        kicker: "Local technique",
        title: "Le local technique piscine, coeur de la performance",
        items: [
          { title: "Pompes & circulation", text: "Controle de debit, raccordements, circulation hydraulique et optimisation." },
          { title: "Filtration", text: "Filtres, vannes, pression, lavage et coherence avec le volume du bassin." },
          { title: "Electricite", text: "Coffrets, tableaux, protections, mise a la terre et securite de l'installation." },
          { title: "Automatisation", text: "Regulation, traitement automatique, eclairage, chauffage et pilotage." },
        ],
      },
    ],
  },
  {
    slug: "equipement-piscine-maroc",
    kind: "service",
    navLabel: "Equipements",
    title: "Materiel et equipement piscine au Maroc",
    h1: "Materiel piscine & equipements de qualite",
    eyebrow: "Performance, fiabilite et durabilite",
    description:
      "Pompes, filtres, skimmers, projecteurs LED, chauffage, regulation, robots, couvertures, buses, accessoires et equipements de local technique.",
    cta: "Demander un devis equipement",
    secondaryCta: "Nos conseils d'experts",
    heroAlt: "Équipements de piscine et installation technique",
    primaryKeyword: "equipement piscine Maroc",
    variants: ["materiel piscine Maroc", "pompe piscine Maroc", "filtre piscine Maroc"],
    sections: [
      {
        kicker: "Categories",
        title: "Tout le materiel pour votre piscine",
        items: [
          { title: "Pompes piscine", text: "Circulation, performance et dimensionnement selon l'installation." },
          { title: "Filtres piscine", text: "Filtration adaptee au bassin, a l'usage et au local technique." },
          { title: "Chauffage", text: "Chauffage piscine, pompe a chaleur et confort saisonnier." },
          { title: "Robots & accessoires", text: "Aide au nettoyage, buses, skimmers, projecteurs et pieces utiles." },
        ],
      },
    ],
  },
  {
    slug: "traitement-piscine-maroc",
    kind: "service",
    navLabel: "Traitement",
    title: "Traitement de l'eau de piscine au Maroc",
    h1: "Traitement de l'eau de piscine au Maroc",
    eyebrow: "Eau equilibree et suivi technique",
    description:
      "Analyse, equilibre pH, TAC, durete, filtration, desinfection, UV, oxygene actif et regulation automatique avec un discours technique prudent.",
    cta: "Analyser mon eau",
    secondaryCta: "Solutions sans chlore traditionnel",
    heroAlt: "Équipements de traitement pour une eau de piscine claire",
    primaryKeyword: "traitement piscine Maroc",
    variants: ["traitement eau piscine", "traitement UV piscine", "oxygene actif piscine"],
    sections: [
      {
        kicker: "Solutions de traitement",
        title: "Une eau claire commence par un bon equilibre",
        items: [
          { title: "Analyse de l'eau", text: "Lecture des parametres essentiels avant toute recommandation de traitement." },
          { title: "Equilibre pH, TAC, durete", text: "Base indispensable pour proteger l'eau, les equipements et le confort." },
          { title: "Traitement UV", text: "Solution technique pouvant reduire certains besoins de desinfection selon configuration." },
          { title: "Regulation automatique", text: "Mesure et ajustement pour un suivi plus regulier des parametres." },
        ],
      },
    ],
  },
  {
    slug: "traitement-piscine-sans-chlore",
    kind: "service",
    title: "Traitement piscine sans chlore traditionnel",
    h1: "Traitement piscine avec reduction ou alternative au chlore traditionnel",
    eyebrow: "Solutions naturelles et techniques",
    description:
      "UV, oxygene actif, filtration adaptee et regulation peuvent aider a reduire ou remplacer certains usages du chlore traditionnel selon le bassin.",
    cta: "Etudier une alternative",
    heroAlt: "Système de traitement alternatif de l'eau de piscine",
    primaryKeyword: "traitement piscine sans chlore",
    variants: ["piscine sans chlore", "traitement piscine biologique", "traitement piscine ecologique"],
    sections: [
      {
        title: "Des options a evaluer techniquement",
        items: [
          { title: "UV", text: "Un systeme a integrer avec filtration et suivi de l'eau." },
          { title: "Oxygene actif", text: "Une option de desinfection qui demande dosage et controle." },
          { title: "Filtration adaptee", text: "La qualite de filtration reste essentielle, meme avec une alternative." },
          { title: "Limites", text: "Chaque solution depend du bassin, de l'usage, du climat et de l'entretien." },
        ],
      },
    ],
  },
  {
    slug: "fontaines-maroc",
    kind: "service",
    navLabel: "Fontaines",
    title: "Fontaines et jeux d'eau au Maroc",
    h1: "Fontaines & jeux d'eau au Maroc",
    eyebrow: "Design, hydraulique et lumiere",
    description:
      "Conception, installation, automatisation, eclairage, entretien et renovation de fontaines decoratives, architecturales, murs d'eau et jets dynamiques.",
    cta: "Discuter d'une fontaine",
    secondaryCta: "Voir nos realisations",
    heroAlt: "Fontaine architecturale contemporaine au Maroc",
    primaryKeyword: "fontaine Maroc",
    variants: ["installation fontaine Maroc", "jeux d'eau Maroc", "fontaine decorative Maroc"],
    sections: [
      {
        title: "Des fontaines pour chaque projet",
        items: [
          { title: "Fontaine decorative", text: "Pour jardin, patio, entree de villa ou espace prive." },
          { title: "Fontaine architecturale", text: "Integration a un projet d'hotel, de residence ou d'espace public." },
          { title: "Jets dynamiques", text: "Programmation, eclairage et effets d'eau maitrises." },
          { title: "Entretien", text: "Maintenance hydraulique, nettoyage, controle et SAV." },
        ],
      },
    ],
  },
  {
    slug: "spa-jacuzzi-maroc",
    kind: "service",
    navLabel: "Spa & Jacuzzi",
    title: "Spa et Jacuzzi au Maroc",
    h1: "Spa & Jacuzzi au Maroc",
    eyebrow: "Bien-etre sur mesure",
    description:
      "Etude, implantation, integration architecturale, plomberie, electricite, chauffage, filtration, traitement de l'eau, maintenance et SAV.",
    cta: "Demander un devis spa",
    secondaryCta: "Voir nos realisations",
    heroAlt: "Spa et jacuzzi intégrés à une villa contemporaine",
    primaryKeyword: "spa Maroc",
    variants: ["jacuzzi Maroc", "installation spa Maroc", "installation jacuzzi"],
    sections: [
      {
        title: "Un espace wellness integre a votre lieu",
        items: [
          { title: "Etude & implantation", text: "Choix de l'emplacement, contraintes techniques et usage attendu." },
          { title: "Installation", text: "Raccordements, filtration, electricite et mise en service." },
          { title: "Integration sur mesure", text: "Une solution coherente avec votre architecture et votre style." },
          { title: "Maintenance", text: "Suivi technique, nettoyage, traitement de l'eau et assistance." },
        ],
      },
    ],
  },
  {
    slug: "sauna-hammam-maroc",
    kind: "service",
    title: "Sauna et Hammam au Maroc",
    h1: "Sauna & Hammam au Maroc",
    eyebrow: "Detente et tradition",
    description:
      "Conception, installation, renovation, equipements, vapeur, ventilation, electricite, plomberie, entretien et SAV pour espaces bien-etre.",
    cta: "Concevoir mon espace bien-etre",
    secondaryCta: "Parler a un expert",
    heroAlt: "Sauna en bois et hammam contemporain",
    primaryKeyword: "sauna hammam Maroc",
    variants: ["sauna Maroc", "hammam Maroc", "construction hammam"],
    sections: [
      {
        title: "Tradition et modernite technique",
        items: [
          { title: "Conception", text: "Dimensionnement, materiaux, confort d'usage et contraintes du lieu." },
          { title: "Installation", text: "Equipements, electricite, vapeur, evacuation et coordination technique." },
          { title: "Renovation", text: "Modernisation d'espaces existants selon leur etat et leur usage." },
          { title: "Entretien", text: "Controle, maintenance et accompagnement pour préserver la qualite." },
        ],
      },
    ],
  },
  {
    slug: "mur-eau-maroc",
    kind: "service",
    title: "Mur d'eau au Maroc : conception et installation",
    h1: "Mur d'eau sur mesure au Maroc",
    eyebrow: "Architecture, eau et lumiere",
    description:
      "Murs d'eau interieurs ou exterieurs pour villas, hotels, accueils professionnels et espaces paysagers.",
    cta: "Imaginer mon mur d'eau",
    heroAlt: "Mur d'eau intégré à une architecture contemporaine",
    primaryKeyword: "mur d'eau Maroc",
    variants: ["fontaine mur d'eau", "mur d'eau interieur", "mur d'eau hotel"],
    sections: [
      {
        title: "Une presence visuelle forte et maitrisee",
        items: [
          { title: "Integration architecturale", text: "Proportions, materiaux, circulation de l'eau et ambiance lumineuse." },
          { title: "Hydraulique", text: "Pompe, filtration, reservoir, acces maintenance et niveau sonore." },
          { title: "Eclairage", text: "Mise en valeur sobre, adaptee a l'espace et a l'usage." },
          { title: "Entretien", text: "Nettoyage, controle de l'eau, verification des elements techniques." },
        ],
      },
    ],
  },
  {
    slug: "chauffage-piscine-maroc",
    kind: "service",
    title: "Chauffage piscine au Maroc",
    h1: "Chauffage piscine au Maroc",
    eyebrow: "Confort et saisonnalite",
    description: "Solutions de chauffage piscine, pompe a chaleur, regulation et integration au local technique.",
    cta: "Evaluer mon chauffage",
    heroAlt: "Équipement de chauffage pour piscine",
    primaryKeyword: "chauffage piscine Maroc",
    variants: ["pompe a chaleur piscine", "chauffer une piscine"],
    sections: [{ title: "Confort thermique", items: [{ title: "Dimensionnement", text: "Evaluation du volume, de l'usage et des conditions d'installation." }, { title: "Pompe a chaleur", text: "Solution frequente a etudier selon environnement et budget." }, { title: "Regulation", text: "Pilotage et suivi pour eviter les consommations inutiles." }] }],
  },
  {
    slug: "deshumidification-piscine",
    kind: "service",
    title: "Deshumidification piscine interieure",
    h1: "Deshumidification piscine interieure",
    eyebrow: "Air, confort et protection du batiment",
    description: "Etude de deshumidification pour piscines interieures, confort, ventilation et preservation des materiaux.",
    cta: "Etudier mon espace interieur",
    heroAlt: "Espace piscine intérieure avec gestion de l'humidité",
    primaryKeyword: "deshumidification piscine",
    variants: ["piscine interieure humidite", "ventilation piscine interieure"],
    sections: [{ title: "Un sujet technique essentiel", items: [{ title: "Confort", text: "Limiter l'humidite ressentie autour du bassin." }, { title: "Batiment", text: "Proteger les materiaux et les finitions lorsque l'installation est adaptee." }, { title: "Coordination", text: "Travailler avec chauffage, ventilation et usage de la piscine." }] }],
  },
  {
    slug: "renovation-piscine-maroc",
    kind: "service",
    title: "Renovation piscine au Maroc",
    h1: "Renovation piscine au Maroc",
    eyebrow: "Modernisation et remise a niveau",
    description: "Renovation de bassin, etancheite, local technique, filtration, revetement et equipements piscine.",
    cta: "Diagnostiquer ma piscine",
    heroAlt: "Rénovation du revêtement d'une piscine",
    primaryKeyword: "renovation piscine Maroc",
    variants: ["reparation piscine Maroc", "moderniser piscine"],
    sections: [{ title: "Redonner de la fiabilite a votre piscine", items: [{ title: "Diagnostic", text: "Identifier les problemes visibles et les points techniques a controler." }, { title: "Local technique", text: "Moderniser pompe, filtration, vannes, coffrets et regulation." }, { title: "Bassin", text: "Etudier revetement, etancheite, margelles et confort d'usage." }] }],
  },
  {
    slug: "contrat-entretien-piscine",
    kind: "service",
    title: "Contrat entretien piscine",
    h1: "Contrat d'entretien piscine",
    eyebrow: "Suivi regulier et maintenance preventive",
    description: "Formules d'entretien piscine personnalisables selon le bassin, la frequence souhaitee et le niveau de suivi.",
    cta: "Recevoir une formule",
    heroAlt: "Technicien chargé de la maintenance d'une piscine",
    primaryKeyword: "contrat entretien piscine",
    variants: ["maintenance piscine", "entretien hebdomadaire piscine"],
    sections: [{ title: "Une formule adaptée à votre bassin", items: [{ title: "Essentiel", text: "Contrôle et nettoyage courant." }, { title: "Confort", text: "Suivi technique plus complet." }, { title: "Premium", text: "Accompagnement personnalisé et prioritaire." }] }],
  },
  {
    slug: "local-technique-piscine",
    kind: "service",
    title: "Local technique piscine",
    h1: "Local technique piscine",
    eyebrow: "Pompes, filtration, regulation et securite",
    description: "Creation, renovation et optimisation de local technique piscine pour une installation plus claire et fiable.",
    cta: "Optimiser mon local technique",
    heroAlt: "Local technique piscine avec filtration et automatisation",
    primaryKeyword: "local technique piscine",
    variants: ["pompe piscine", "filtration piscine", "regulation piscine"],
    sections: [{ title: "Tout l'essentiel au meme endroit", items: [{ title: "Pompe", text: "Circulation adaptee au volume et a l'usage." }, { title: "Filtre", text: "Filtration dimensionnee et accessible." }, { title: "Traitement", text: "Integration d'un systeme adapte." }, { title: "Coffret", text: "Electricite, protections et pilotage." }] }],
  },
  {
    slug: "traitement-piscine-biologique",
    kind: "service",
    title: "Traitement piscine biologique",
    h1: "Traitement piscine biologique et solutions plus naturelles",
    eyebrow: "Approche prudente et technique",
    description: "Options naturelles ou plus ecologiques a evaluer selon le bassin, la filtration et l'entretien possible.",
    cta: "Etudier une solution naturelle",
    heroAlt: "Traitement de piscine avec dosage et filtration adaptés",
    primaryKeyword: "traitement piscine biologique",
    variants: ["traitement piscine naturel", "traitement piscine ecologique"],
    sections: [{ title: "Des solutions a cadrer avec precision", items: [{ title: "Filtration", text: "La base technique reste essentielle." }, { title: "UV et oxygene actif", text: "Options possibles selon configuration." }, { title: "Entretien", text: "Aucune solution ne supprime le besoin de suivi." }] }],
  },
  {
    slug: "services",
    kind: "hub",
    navLabel: "Services",
    title: "Services Expert Pool Maroc",
    h1: "Nos services piscine, fontaines et bien-etre",
    eyebrow: "Un partenaire technique unique",
    description: "Retrouvez les prestations principales: piscine, fontaine, spa, sauna, local technique, traitement de l'eau, entretien et equipements.",
    cta: "Demander un devis",
    heroAlt: "Installation technique pour piscine au Maroc",
    primaryKeyword: "services piscine Maroc",
    variants: ["expert piscine Maroc", "SAV piscine Maroc"],
    sections: [{ title: "Prestations principales", items: [] }],
  },
  {
    slug: "realisations",
    kind: "hub",
    navLabel: "Realisations",
    title: "Realisations Expert Pool Maroc",
    h1: "Nos realisations",
    eyebrow: "Références et études de cas",
    description: "Explorez nos domaines d'intervention : piscines, fontaines et installations techniques. Contactez-nous pour échanger sur un projet comparable au vôtre.",
    cta: "Discuter d'un projet",
    heroAlt: "Architecture aquatique contemporaine au Maroc",
    primaryKeyword: "realisations piscine Maroc",
    variants: ["projets piscine Maroc", "fontaines Maroc"],
    sections: [{ title: "Nos domaines d'intervention", intro: "Les photographies de cette page illustrent nos savoir-faire et ne sont pas présentées comme des chantiers réalisés par notre équipe.", items: [{ title: "Piscines", text: "Conception, construction ou rénovation adaptées au lieu et à l'usage." }, { title: "Fontaines", text: "Design hydraulique, éclairage, automatisation et intégration architecturale." }, { title: "Installations techniques", text: "Filtration, pompes, traitement et organisation du local technique." }] }],
  },
  {
    slug: "a-propos",
    kind: "editorial",
    navLabel: "A propos",
    title: "A propos d'Expert Pool Maroc",
    h1: "Expert Pool Maroc",
    eyebrow: "Savoir-faire piscine et espaces aquatiques",
    description: "Une identite d'entreprise claire autour de la conception, l'installation, l'entretien et le service technique pour piscines et espaces bien-etre.",
    cta: "Nous contacter",
    heroAlt: "Étude technique d'un projet de piscine au Maroc",
    primaryKeyword: "Expert Pool Maroc",
    variants: ["entreprise piscine Maroc", "pisciniste Maroc"],
    sections: [{ title: "Une approche guidée par le projet", items: [{ title: "Mission", text: "Concevoir des installations fiables, élégantes et faciles à entretenir." }, { title: "Méthode", text: "Étude, conseil, conception, installation, mise en service et suivi." }, { title: "Transparence", text: "Les références, qualifications et partenaires ne sont publiés qu'après validation documentaire." }] }],
  },
  {
    slug: "conseils",
    kind: "editorial",
    navLabel: "Conseils",
    title: "Conseils piscine, entretien et equipements",
    h1: "Conseils piscine et espaces aquatiques",
    eyebrow: "Guides pratiques",
    description: "Des repères pratiques sur la construction, l'entretien, le traitement, les équipements et les fontaines pour mieux préparer un projet au Maroc.",
    cta: "Demander conseil",
    heroAlt: "Analyse et entretien professionnel d'une piscine",
    primaryKeyword: "conseils piscine",
    variants: ["guide piscine Maroc", "entretien piscine"],
    sections: [{ title: "Bien préparer les décisions techniques", items: [{ title: "Construire une piscine au Maroc", text: "Les points à cadrer: usage, terrain, structure, hydraulique, filtration, sécurité et entretien futur." }, { title: "Entretenir une piscine toute l'année", text: "Nettoyage, équilibre de l'eau, circulation et contrôles préventifs forment un ensemble indissociable." }, { title: "Choisir une pompe piscine", text: "Le volume du bassin, les pertes de charge, la filtration et le temps de circulation guident le dimensionnement." }] }],
  },
];

export const contactPage: LandingPage = {
  slug: "contact",
  kind: "contact",
  navLabel: "Contact",
  title: "Contact Expert Pool Maroc - demande de devis",
  h1: "Votre projet piscine commence ici",
  eyebrow: "Contactez Expert Pool Maroc",
  description: "Expliquez votre besoin et recevez une reponse adaptee pour votre projet de piscine, spa, fontaine ou espace bien-etre.",
  cta: "Envoyer ma demande",
  secondaryCta: "Parler a un conseiller",
  heroAlt: "Projet de piscine dans une villa contemporaine au Maroc",
  primaryKeyword: "devis piscine Maroc",
  variants: ["contact Expert Pool Maroc", "demande devis piscine"],
  sections: [],
  faq: [
    { question: "Comment demander un devis ?", answer: "Décrivez votre projet via le formulaire WhatsApp ou contactez-nous au +212 660 628 760. Nous préciserons ensuite les informations nécessaires à l'étude." },
    { question: "Puis-je envoyer des photos ou plans ?", answer: "Oui. Vous pouvez envoyer vos documents par e-mail à contact@expertpool.ma en précisant votre ville et le type de projet." },
  ],
};

export const allPages = [...pages, contactPage];

export function getPage(slug: string) {
  return allPages.find((page) => page.slug === slug);
}

export const navItems = allPages
  .filter((page) => page.navLabel)
  .map((page) => ({ label: page.navLabel!, href: page.slug ? `/${page.slug}` : "/" }));
