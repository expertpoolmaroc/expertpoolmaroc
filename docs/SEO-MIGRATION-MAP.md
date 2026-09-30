# Cartographie de migration SEO

| Ancienne URL | Nouvelle URL | Action | Statut code |
| --- | --- | --- | --- |
| `https://www.expertpool.ma/` | `https://piscineexpertpool.com/` | 301/308 sur l'ancien hébergement | À déployer côté ancien domaine |
| `/a-propos` | `https://piscineexpertpool.com/a-propos` | 301/308 inter-domaine | À déployer côté ancien domaine |
| `/piscines-spa-bien-etre` | `https://piscineexpertpool.com/piscines` | 308 ciblée | Implémentée sur la nouvelle app |
| `/fontaines-bassins` | `https://piscineexpertpool.com/fontaines-maroc` | 308 ciblée | Implémentée sur la nouvelle app |
| `/traitement-eaux-equipements` | `https://piscineexpertpool.com/traitement-piscine-maroc` | 308 ciblée | Implémentée sur la nouvelle app |
| `/installations-techniques` | `https://piscineexpertpool.com/local-technique-piscine` | 308 ciblée | Implémentée sur la nouvelle app |
| `/realisations-contact` | `https://piscineexpertpool.com/realisations` | 308 ciblée | Implémentée sur la nouvelle app |

Les redirections inter-domaines doivent aussi être configurées sur l'hébergement de `expertpool.ma`; la nouvelle application seule ne peut pas contrôler cet hôte.
