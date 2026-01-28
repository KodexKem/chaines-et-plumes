# 🐘 PHP – Bases essentielles (Cheat Sheet)

## 📘 Introduction

**PHP** est un langage de script **côté serveur** principalement utilisé pour créer des **pages web dynamiques**.  
Il est exécuté sur le serveur et génère du **HTML** envoyé au navigateur.

---

## 🧱 Syntaxe de base

- Un script PHP commence par `<?php` et se termine par `?>`
- Chaque instruction se termine par un **point-virgule** `;`

---

## 🔤 Variables

- Les variables commencent toujours par `$`
- Le type est **dynamique** (pas besoin de le déclarer)

Exemples de variables :

- `$nom`
- `$age`
- `$prix`

---

## 🧮 Types de données courants

- `string` : texte
- `int` : nombre entier
- `float` : nombre décimal
- `bool` : vrai / faux
- `array` : tableau
- `null` : aucune valeur

---

## 🧩 Opérateurs courants

- Arithmétiques : `+`, `-`, `*`, `/`, `%`
- Comparaison : `==`, `===`, `!=`, `<`, `>`, `<=`, `>=`
- Logiques : `&&`, `||`, `!`
- Concaténation : `.`

---

## 🔀 Conditions

- `if`
- `elseif`
- `else`
- `switch`

Utilisées pour exécuter du code selon une condition.

---

## 🔁 Boucles

- `while`
- `do...while`
- `for`
- `foreach` (très utilisé avec les tableaux)

---

## 📦 Tableaux

PHP propose deux types principaux :

- **Tableaux indexés**
- **Tableaux associatifs** (clé → valeur)

Fonctions utiles :

- `count()`
- `array_push()`
- `array_pop()`

---

## 🧱 Fonctions

- Permettent de réutiliser du code
- Peuvent recevoir des paramètres
- Peuvent retourner une valeur avec `return`

---

## 📄 Inclusion de fichiers

- `include`
- `require`
- `include_once`
- `require_once`

Utiles pour séparer le code en plusieurs fichiers.

---

## 🌐 PHP et HTML

PHP peut être **intégré directement dans le HTML**  
Idéal pour afficher des données dynamiques.

---

## 🧠 Bonnes pratiques

- Toujours utiliser `<?php` (pas les balises courtes)
- Bien indenter le code
- Séparer la logique PHP et l’affichage HTML
- Commenter le code (`//` ou `/* */`)

---

## ✅ En résumé

- PHP est exécuté côté serveur
- Variables dynamiques avec `$`
- Très utilisé avec les bases de données
- Idéal pour créer des sites web dynamiques
