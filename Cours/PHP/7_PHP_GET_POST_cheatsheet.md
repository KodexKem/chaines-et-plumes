# 📨 PHP – Méthodes GET et POST (Bases)

## 📘 Introduction

En PHP, **GET** et **POST** sont deux méthodes HTTP utilisées pour **envoyer des données depuis un formulaire ou une requête HTTP vers le serveur**.  
Les données sont récupérées côté serveur via les superglobales `$_GET` et `$_POST`.

---

## 🌐 Méthode GET

### 📌 Principe

- Les données sont **ajoutées à l’URL**
- Visibles dans la barre d’adresse
- Limitées en taille
- Peu sécurisées

### 📥 Récupération en PHP

Les données envoyées avec GET sont accessibles via :

- `$_GET`

### 📎 Cas d’utilisation

- Filtres
- Recherches
- Pagination
- Paramètres non sensibles

### ⚠️ Inconvénients

- Données visibles
- Facilement modifiables
- À éviter pour les mots de passe ou données sensibles

---

## 📦 Méthode POST

### 📌 Principe

- Les données sont envoyées **dans le corps de la requête**
- Invisibles dans l’URL
- Pas de limite de taille significative
- Plus sécurisée que GET (mais nécessite quand même des protections)

### 📥 Récupération en PHP

Les données envoyées avec POST sont accessibles via :

- `$_POST`

### 📎 Cas d’utilisation

- Formulaires de connexion
- Envoi de données sensibles
- Création ou modification de données

---

## 🔐 Sécurité et bonnes pratiques

- Toujours **vérifier l’existence** des données avec `isset()`
- Toujours **nettoyer les entrées utilisateur**
- Ne jamais faire confiance aux données reçues
- Utiliser POST pour les données sensibles
- Protéger les formulaires avec des tokens (CSRF)

---

## 🔄 Comparatif rapide

| Critère            | GET                | POST                 |
| ------------------ | ------------------ | -------------------- |
| Visibilité         | Visible dans l’URL | Invisible            |
| Sécurité           | Faible             | Meilleure            |
| Taille des données | Limitée            | Plus large           |
| Usage              | Lecture / filtres  | Envoi / modification |
| Superglobale       | `$_GET`            | `$_POST`             |

---

## ✅ En résumé

- **GET** : simple, rapide, visible → pour la lecture
- **POST** : plus sécurisé → pour l’envoi de données
- Toujours valider et sécuriser les données reçues
