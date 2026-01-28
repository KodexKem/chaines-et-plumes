# 🔐 PHP – Bases de la sécurité (Cheat Sheet)

## 📘 Introduction

La **sécurité en PHP** est essentielle pour protéger une application contre :

- les injections SQL
- le vol de données
- les attaques XSS
- les accès non autorisés

Une mauvaise sécurisation peut compromettre toute une base de données ou un serveur.

---

## 🧱 1. Sécurisation des entrées utilisateur

### 🔍 Principe

**Ne jamais faire confiance aux données provenant de l’utilisateur** :

- formulaires
- URL
- cookies
- headers HTTP

---

### ✏️ Validation vs Nettoyage

- **Validation** : vérifier que la donnée est correcte (format attendu)
- **Nettoyage** : supprimer ou neutraliser les caractères dangereux

---

## 🛡️ 2. Protection contre les injections SQL

### ❌ Problème

Les injections SQL permettent d’exécuter du code SQL malveillant.

### ✅ Solution

- Utiliser **PDO avec des requêtes préparées**
- Ne jamais concaténer directement des variables dans une requête SQL

➡️ Les paramètres liés empêchent l’exécution de code injecté.

---

## 🔐 3. Gestion des mots de passe

### ❌ À ne jamais faire

- Stocker un mot de passe en clair
- Utiliser `md5()` ou `sha1()`

### ✅ Bonnes pratiques

- Utiliser `password_hash()` pour stocker
- Utiliser `password_verify()` pour vérifier

Ces fonctions utilisent des algorithmes sécurisés et salés automatiquement.

---

## 🌐 4. Protection contre les attaques XSS

### ❌ Problème

Le XSS permet d’injecter du JavaScript malveillant dans une page.

### ✅ Solution

- Toujours échapper les données affichées
- Utiliser `htmlspecialchars()` avant d’afficher une donnée utilisateur

Objectif : empêcher l’exécution de code HTML / JS injecté.

---

## 🍪 5. Sécurisation des sessions

### Bonnes pratiques

- Utiliser `session_start()` correctement
- Ne jamais stocker de données sensibles en clair dans la session
- Régénérer l’ID de session après connexion (`session_regenerate_id()`)

---

## 🔒 6. Gestion des accès et permissions

### Principes

- Vérifier les droits **avant chaque action sensible**
- Protéger les pages privées par une vérification de session
- Ne jamais faire confiance au front-end seul

---

## 📁 7. Sécurité des fichiers

### Uploads

- Vérifier le **type MIME**
- Vérifier l’extension
- Renommer les fichiers uploadés
- Stocker les fichiers hors du dossier public si possible

---

## 🧠 Bonnes pratiques générales

- Activer les erreurs en développement, les désactiver en production
- Ne jamais afficher les erreurs SQL en production
- Mettre PHP et les dépendances à jour
- Limiter les permissions des comptes SQL

---

## ✅ En résumé

- Toujours valider et nettoyer les entrées utilisateur
- Utiliser PDO et les requêtes préparées
- Hasher les mots de passe correctement
- Protéger contre XSS avec l’échappement
- Sécuriser les sessions et les accès
- Ne jamais faire confiance aux données externes
