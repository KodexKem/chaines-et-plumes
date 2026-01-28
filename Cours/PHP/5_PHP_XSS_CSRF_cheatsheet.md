# 🛡️ Sécurité Web – XSS & CSRF (Cheat Sheet)

## 📘 Introduction

Les failles **XSS** et **CSRF** sont parmi les **attaques web les plus courantes**.  
Elles exploitent une mauvaise gestion des entrées utilisateur et des requêtes HTTP.

---

## 🐛 XSS – Cross-Site Scripting

### 🔍 Définition

Le **XSS** consiste à **injecter du code JavaScript malveillant** dans une page web affichée à d’autres utilisateurs.

---

### 🎯 Objectifs d’une attaque XSS

- Voler des **cookies de session**
- Modifier le contenu d’une page
- Rediriger l’utilisateur
- Exécuter du code à son insu

---

### 🧩 Types de XSS

- **XSS stocké** : le script est enregistré en base de données
- **XSS réfléchi** : le script est renvoyé immédiatement (URL, formulaire)
- **XSS DOM** : manipulation directe du DOM côté client

---

### 🔐 Protection contre le XSS

- Toujours **échapper les données affichées**
- Ne jamais faire confiance aux données utilisateur
- Utiliser les fonctions d’échappement HTML

Exemples de bonnes pratiques :

- `htmlspecialchars()` en PHP
- Ne jamais afficher directement `$_POST` ou `$_GET`
- Éviter `innerHTML` en JavaScript

---

## 🔄 CSRF – Cross-Site Request Forgery

### 🔍 Définition

Le **CSRF** force un utilisateur authentifié à **exécuter une action sans son consentement**.

---

### 🎯 Exemple d’attaque CSRF

Un utilisateur connecté :

- change son mot de passe
- supprime un compte
- envoie un formulaire

➡️ sans s’en rendre compte, via un lien ou une requête piégée.

---

### 🔐 Protection contre le CSRF

- Utiliser un **token CSRF unique** par formulaire
- Vérifier ce token à la soumission
- Refuser les requêtes sans token valide

Bonnes pratiques :

- Token stocké en **session**
- Token envoyé via **POST**
- Refuser les actions sensibles en **GET**

---

## 🧠 Bonnes pratiques générales

- Toujours filtrer les entrées utilisateur
- Toujours échapper les sorties HTML
- Séparer logique et affichage
- Utiliser HTTPS
- Limiter la durée des sessions

---

## ✅ En résumé

- **XSS** : injection de scripts → protéger l’affichage
- **CSRF** : action forcée → protéger les formulaires
- Ne jamais faire confiance aux données utilisateur
- Sécurité = validation + échappement + tokens
