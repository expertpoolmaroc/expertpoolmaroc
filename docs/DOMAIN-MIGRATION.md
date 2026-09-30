# Migration de domaine

Ancien domaine : `https://www.expertpool.ma`. Nouveau domaine canonique : `https://piscineexpertpool.com`.

1. Conserver l'ancien domaine et son certificat actifs.
2. Déployer la cartographie de `SEO-MIGRATION-MAP.md` sur l'ancien hébergement.
3. Vérifier une seule redirection permanente par URL, sans boucle ni chaîne.
4. Déployer le nouveau site avec `NEXT_PUBLIC_SITE_URL=https://piscineexpertpool.com`.
5. Contrôler canonicals, Open Graph, robots et sitemap sur le domaine public.
6. Déclarer les deux propriétés dans Search Console et soumettre le nouveau sitemap.
7. Utiliser le changement d'adresse Google si les conditions sont réunies.
8. Surveiller 404, indexation, trafic, requêtes et Core Web Vitals pendant la migration.
9. Maintenir les redirections au minimum un an, idéalement tant que l'ancien domaine est conservé.
