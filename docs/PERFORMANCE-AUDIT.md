# Audit de performance

Audits Lighthouse mobile exécutés sur le build de production local, jamais sur `next dev`.

| Page | Performance | Accessibilité | Bonnes pratiques | SEO | LCP | CLS | TBT |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Accueil | 93 | 100 | 100 | 100 | 3,3 s | 0 | 60 ms |
| Construction | 93 | 100 | 100 | 100 | 3,2 s | 0 | 60 ms |
| Entretien | 93 | 100 | 100 | 100 | 3,1 s | 0 | 80 ms |
| Équipements | 93 | 100 | 100 | 100 | 3,3 s | 0 | 50 ms |
| Traitement | 92 | 100 | 100 | 100 | 3,3 s | 0 | 70 ms |
| Fontaines | 92 | 100 | 100 | 100 | 3,3 s | 0 | 70 ms |
| Contact | 92 | 100 | 100 | 100 | 3,3 s | 0 | 80 ms |

Le préchargement du LCP a été ajouté puis recontrôlé; Lighthouse confirme `fetchpriority=high`. Une mesure suivante de l'accueil a varié à 90 / 3,5 s, montrant la variabilité du laboratoire local. Le LCP reste au-dessus de la cible 2,5 s; les données terrain après déploiement devront guider la suite. CLS et TBT sont excellents, le site reste statique et le JavaScript client est limité au formulaire.
