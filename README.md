<<<<<<< HEAD
# MSPR2 - OpenFaaS Serverless Project

Ce projet met en œuvre plusieurs fonctions **serverless** avec [OpenFaaS](https://www.openfaas.com/) et une base de données **PostgreSQL** sur **Kubernetes**. Il simule un système sécurisé de gestion d'utilisateurs.

## 🚀 Fonctionnalités

| Fonction                 | Description |
|--------------------------|-------------|
| `create-account-secure` | Création sécurisée d’un compte utilisateur |
| `authentication`        | Authentification d’un utilisateur avec username + password |
| `generate-2fa`          | Génération d’un secret TOTP + QR Code pour MFA |
| `generate-password`     | Génération et mise à jour d’un mot de passe complexe |

---

## 🧱 Architecture

- **Backend Functions** : OpenFaaS Functions (Python)
- **Base de données** : PostgreSQL 15 (déployée dans Kubernetes)
- **Plateforme** : Kubernetes avec `faas-netes`

# 🔐 MSPR - OpenFaaS User Security Functions

## 🎯 Objectif du projet
Fournir un ensemble de fonctions serverless pour gérer des utilisateurs de manière sécurisée avec :
- Authentification
- 2FA (Google Authenticator)
- Génération de mots de passe forts
- Protection contre les doublons et injections

## ⚙️ Technologies utilisées
- Python 3
- OpenFaaS
- PostgreSQL
- bcrypt, pyotp, qrcode
- Docker / faas-cli

## 📂 Arborescence
functions/
│
├── create-user/
│ ├── handler.py
│ ├── requirements.txt
│ └── create-user.yml
├── login/
├── generate-password/
├── generate-2fa/
├── verify-2fa/

## 🚀 Guide de déploiement

faas-cli build -f NOM_FONCTION.yml
faas-cli push -f NOM_FONCTION.yml
faas-cli deploy -f NOM_FONCTION.yml

## 🧪 Appels CURL²
### ✅ Créer un utilisateur

curl -X POST http://127.0.0.1:8080/function/create-user -H "Content-Type: application/json" -d '{"username": "Ryad", "password": "Test123!", "mfa": ""}'
### 🔐 Authentifier un utilisateur

curl -X POST http://127.0.0.1:8080/function/login -H "Content-Type: application/json" -d '{"username": "Ryad", "password": "Test123!"}'
### 🔑 Générer un mot de passe

curl -X POST http://127.0.0.1:8080/function/generate-password -H "Content-Type: application/json" -d '{"username": "Ryad"}'
### 📱 Générer un QR Code 2FA

curl -X POST http://127.0.0.1:8080/function/generate-2fa -H "Content-Type: application/json" -d '{"username": "Ryad"}'
### ✅ Vérifier un token 2FA

curl -X POST http://127.0.0.1:8080/function/verify-2fa -H "Content-Type: application/json" -d '{"username": "Ryad", "token": "123453"}


🧑‍💻 Auteur
Projet réalisé dans le cadre du MSPR2 à l’EPSI Toulouse
© 2025 - Ryad D.
=======
# mspr2-openfaas
Application serverless
>>>>>>> 37251e12932f196901b83a7d6a437bb4fb5c92ea
