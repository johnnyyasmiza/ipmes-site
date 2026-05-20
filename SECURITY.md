# Security Policy

## Projet

Site vitrine IPMES développé avec Next.js.

## Données sensibles

Le site ne doit pas stocker de mots de passe, documents d'identité, données médicales, données bancaires ou informations sensibles côté client.

## Contact

Pour signaler un problème de sécurité, contacter l'administrateur du projet.

## Mesures appliquées

- Security headers HTTP
- Content Security Policy
- X-Frame-Options DENY
- X-Content-Type-Options nosniff
- Referrer-Policy strict-origin-when-cross-origin
- Permissions-Policy restrictive
- Pas de scripts externes inutiles
- Pas d'authentification sur la version vitrine
- Pas d'upload utilisateur
- Pas de stockage de secrets côté client
