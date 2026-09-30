# Rapport de tests

Exécution finale sur build de production :

- ESLint : réussi.
- TypeScript : réussi.
- Tests unitaires Node : 6/6 réussis.
- Build Next.js : réussi, 28 sorties dont 23 pages publiques indexables.
- Playwright : 47/47 réussis.
- Axe intégré à Playwright : 5 pages, 0 violation critique ou sérieuse.
- Responsive : 12 largeurs de 320 à 1920 px, aucun débordement.
- SEO crawler : 23/23 en HTTP 200 avec H1, title, description, canonical, OG et JSON-LD valide.
- Redirections : 5/5 en HTTP 308, une étape.
- 404 : statut 404 et `noindex` confirmés.
- Sitemap : 23 URLs canoniques, aucun localhost.
- Liens et images : aucun statut supérieur ou égal à 400.
