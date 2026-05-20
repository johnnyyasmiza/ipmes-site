# SECURITY CHECKLIST IPMES

## Version actuelle

- Site vitrine public
- Pas de connexion
- Pas de dashboard public
- Pas d'espace admin public
- Pas de paiement
- Pas d'upload utilisateur
- Pas de base de données
- Pas de données sensibles stockées
- Rubrique Galerie supprimée du site public

## Audit rapide

- [x] Aucune route API `app/**/route.ts`, `app/**/route.js` ou `pages/api/**` trouvée.
- [x] Aucun `dangerouslySetInnerHTML` trouvé.
- [x] Aucun `eval(` trouvé dans le code applicatif.
- [x] Aucun `new Function(` trouvé dans le code applicatif.
- [x] Aucun `document.write` trouvé dans le code applicatif.
- [x] Aucun `innerHTML` trouvé dans le code applicatif.
- [x] `localStorage` limité à la langue et à l'outil local de tri photo, sans secret.
- [x] Aucun `sessionStorage` trouvé dans le code applicatif.
- [x] Liens externes `target="_blank"` vérifiés avec `rel="noopener noreferrer"`.
- [x] Aucun lien public restant vers `/galerie`.
- [x] `/galerie` redirige vers `/espaces`.

## Headers

- [x] Content-Security-Policy
- [x] X-DNS-Prefetch-Control on
- [x] X-Frame-Options DENY
- [x] X-Content-Type-Options nosniff
- [x] Referrer-Policy strict-origin-when-cross-origin
- [x] Permissions-Policy restrictive
- [x] Cross-Origin-Opener-Policy same-origin
- [x] Cross-Origin-Resource-Policy same-origin
- [x] Strict-Transport-Security en production
- [x] poweredByHeader désactivé

## Code

- [x] Aucun dangerouslySetInnerHTML
- [x] Aucun eval
- [x] Aucun new Function
- [x] Aucun document.write
- [x] Liens externes avec rel="noopener noreferrer"
- [x] URLs WhatsApp encodées avec encodeURIComponent
- [x] Helper WhatsApp centralisé dans `lib/whatsapp.ts`
- [x] Vidéos locales conservées dans `/public/videos`
- [x] Images locales conservées dans `/public/images`
- [x] Aucun iframe externe trouvé
- [x] Aucun lecteur vidéo tiers ajouté

## Déploiement

- [ ] HTTPS actif chez l'hébergeur
- [x] Variables `.env*` ignorées par Git
- [x] `.next`, `node_modules`, `dist`, `out` et logs ignorés par Git
- [x] `npm audit --omit=dev` lancé
- [x] Build production testé avec `npm.cmd run build`
- [x] Pages publiques principales testées sous `next start`
- [x] Drapeaux et vidéo Hero testés sous `next start`
- [ ] Site testé sur mobile
- [ ] Vidéos testées après ajout CSP dans le navigateur
- [ ] WhatsApp et Instagram testés dans le navigateur
- [ ] Console navigateur vérifiée sans message CSP rouge critique

## Résultat npm audit

- `npm audit --omit=dev` signale 2 vulnérabilités modérées dans la dépendance transitive `next -> postcss`.
- Le correctif proposé par npm utilise `npm audit fix --force` et rétrograderait Next vers une version incompatible.
- Ne pas appliquer ce correctif forcé; surveiller une version stable Next qui met à jour `postcss`.
