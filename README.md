# Frontend de démonstration – MSPR2

Ce frontend simple permet de tester toutes les fonctions OpenFaaS :

## Fonctions supportées :

- ✅ Création de compte (`create-account-secure`)
- 🔐 Connexion (`authenticate-user`)
- 🔄 Génération de secret TOTP (`generate-2fa-secret`)
- ✅ Vérification de code TOTP (`verify-2fa`)
- ♻️ Renouvellement d’identifiants (`renew-credentials`)

## Structure

- `index.html` → Page principale
- `config.js` → Contient l’URL de l’API OpenFaaS
- `*.js` → Fichiers séparés par fonctionnalité
- `style.css` → Feuille de style
