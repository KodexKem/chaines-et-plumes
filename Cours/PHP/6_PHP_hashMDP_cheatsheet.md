# 🔐 PHP – Hashage des mots de passe (Cheat Sheet)

## 📘 Introduction

Le **hashage des mots de passe** permet de **ne jamais stocker un mot de passe en clair** dans une base de données.  
En PHP, il est fortement recommandé d’utiliser les **fonctions natives sécurisées** prévues à cet effet.

---

## ❌ À ne JAMAIS faire

- Stocker un mot de passe en clair
- Utiliser des algorithmes obsolètes comme :
  - `md5()`
  - `sha1()`

Ces méthodes sont **cassables rapidement** et ne sont **pas sécurisées**.

---

## ✅ Méthode recommandée en PHP

### 🔹 password_hash()

Permet de **hasher un mot de passe de manière sécurisée**.

Fonctionnement :

- Utilise un algorithme fort (par défaut `bcrypt`)
- Ajoute automatiquement un **sel (salt)**
- Génère un hash unique à chaque fois

---

## 🔍 Vérification d’un mot de passe

### 🔹 password_verify()

Permet de vérifier si un mot de passe correspond à un hash stocké.

Principe :

- Le mot de passe saisi est comparé au hash
- Retourne `true` ou `false`
- Aucune comparaison manuelle nécessaire

---

## 🔄 Mise à jour d’un hash

### 🔹 password_needs_rehash()

Utile si :

- L’algorithme change
- Le coût de calcul est modifié

Permet de rehasher automatiquement un mot de passe après connexion.

---

## 🧠 Bonnes pratiques

- Toujours utiliser `password_hash()` et `password_verify()`
- Ne jamais afficher un hash
- Ne jamais décrypter un mot de passe (impossible par conception)
- Utiliser HTTPS pour les formulaires
- Combiner avec :
  - Sécurité formulaire
  - Sessions sécurisées
  - Protection contre les attaques par force brute

---

## ✅ En résumé

- Le mot de passe **n’est jamais stocké en clair**
- `password_hash()` → créer le hash
- `password_verify()` → vérifier le mot de passe
- `md5` et `sha1` sont **interdits**
- Le hashage est **un pilier fondamental de la sécurité**
