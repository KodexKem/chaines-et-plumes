# 🐘 PHP – Bases de PDO (Cheat Sheet)

## 📘 Introduction

**PDO (PHP Data Objects)** est une extension PHP permettant de **se connecter à une base de données** et d’exécuter des requêtes SQL de manière **sécurisée et portable** (MySQL, PostgreSQL, SQLite, etc.).

---

## 🔌 Connexion à une base de données

PDO utilise une **chaîne DSN** (Data Source Name) pour définir la connexion.

Étapes du processus :

1. Définir les informations de connexion (hôte, base, utilisateur, mot de passe)
2. Créer une instance de `PDO`
3. Gérer les erreurs avec des exceptions

---

## ⚠️ Gestion des erreurs

PDO permet de gérer les erreurs via des **exceptions**.

Bonnes pratiques :

- Activer le mode exception
- Éviter l’affichage direct des erreurs en production

---

## 📤 Exécuter une requête simple

Deux méthodes principales :

- `query()` → requêtes simples (SELECT sans données utilisateur)
- `exec()` → requêtes sans retour (INSERT, UPDATE, DELETE)

---

## 🧩 Requêtes préparées (sécurité)

Les **requêtes préparées** protègent contre les **injections SQL**.

Principe :

1. Préparer la requête
2. Lier les paramètres
3. Exécuter la requête

Avantages :

- Sécurité
- Lisibilité
- Performance sur requêtes répétées

---

## 🔗 Liaison des paramètres

Deux méthodes principales :

- `bindValue()` → valeur directe
- `bindParam()` → variable (liée par référence)

Types courants :

- `PDO::PARAM_INT`
- `PDO::PARAM_STR`
- `PDO::PARAM_BOOL`
- `PDO::PARAM_NULL`

---

## 📥 Récupérer des données

Méthodes de récupération :

- `fetch()` → une seule ligne
- `fetchAll()` → toutes les lignes

Modes courants :

- `PDO::FETCH_ASSOC` → tableau associatif
- `PDO::FETCH_OBJ` → objet
- `PDO::FETCH_BOTH` → associatif + index

---

## 🧮 Compter les résultats

- `rowCount()` permet de connaître le nombre de lignes affectées  
  ⚠️ Fiabilité variable selon le driver pour les SELECT

---

## 🔒 Sécurité – Bonnes pratiques

- Toujours utiliser des **requêtes préparées**
- Ne jamais injecter directement des données utilisateur dans le SQL
- Centraliser la connexion PDO
- Ne pas afficher les erreurs SQL en production

---

## 🧠 Résumé

- PDO est l’outil standard pour accéder aux bases de données en PHP
- Connexion via DSN
- Requêtes préparées = sécurité
- `fetch()` / `fetchAll()` pour lire les données
- Gestion des erreurs via exceptions
- Compatible avec plusieurs SGBD

---
