# Expert Pool Maroc

## Demandes de devis

Les boutons « Demander un devis » ouvrent le formulaire `/contact` avec le projet préselectionné. Le formulaire envoie un POST à `/api/quote`. Aucun secret ne doit être préfixé par `NEXT_PUBLIC_`.

Copier les noms de variables de `.env.example` dans les variables **serveur** de Vercel. Configurer `EMAIL_FROM` avec une adresse vérifiée et autorisée par le fournisseur, et `EMAIL_TO=contact@expertpool.ma`. Si `SMTP_HOST`, `SMTP_USER` et `SMTP_PASSWORD` sont définis, l'envoi utilise SMTP. Sinon, il utilise `RESEND_API_KEY`. Sans fournisseur configuré, l'API répond 503 et le formulaire affiche une erreur.

Après configuration, envoyer une vraie demande test à `/api/quote` avec le nom `Test Site Expert Pool`, le téléphone `+212660628760`, un e-mail valide, la ville `Casablanca`, le projet `Test formulaire`, le message `Test d'envoi réel depuis le site.`, la source `/contact` et `website` vide. Vérifier l'arrivée dans la boîte de réception ou conserver l'identifiant retourné par le fournisseur dans la réponse API (`id`). Cet identifiant indique que le fournisseur a accepté le message, pas qu'il a été reçu.

La protection anti-spam comprend un champ honeypot et une limite de cinq tentatives par adresse IP et par heure dans chaque instance serveur. Cette limite en mémoire est locale à une instance ; pour une limite globale sur plusieurs instances Vercel, connecter un stockage partagé avant d'augmenter le trafic.

## Vérification

```bash
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```
