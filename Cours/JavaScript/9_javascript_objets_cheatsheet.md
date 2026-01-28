# 🧱 JavaScript – Les Objets (Cheat Sheet)

## 📘 Introduction
Un **objet** est une structure qui permet de **stocker des données sous forme de paires clé–valeur**.  
Il sert à représenter des **entités**, comme un utilisateur, un produit, etc.

---

## 🧩 Définir un objet

| Syntaxe | Description |
|--------|-------------|
| `{ clé: valeur }` | Déclare un objet simple |

Les clés sont des **chaînes** (sans guillemets si nom valide).

---

## 🎯 Accéder aux valeurs

| Méthode | Description | Exemple |
|----------|--------------|---------|
| `objet.clé` | Accès direct | `user.nom` |
| `objet["clé"]` | Accès par chaîne (utile si clé dynamique) | `user["email"]` |

---

## ✏️ Modifier un objet

| Action | Exemple |
|--------|---------|
| Ajouter une propriété | `user.age = 25` |
| Modifier une propriété | `user.nom = "Alice"` |
| Supprimer une propriété | `delete user.email` |

---

## 🧭 Parcourir un objet

| Méthode | Rôle |
|--------|------|
| `for...in` | Parcourt les clés de l'objet |
| `Object.keys(obj)` | Renvoie un tableau des clés |
| `Object.values(obj)` | Renvoie un tableau des valeurs |
| `Object.entries(obj)` | Renvoie un tableau `[clé, valeur]` |

---

## 🧱 Objets imbriqués
Les objets peuvent contenir :  
- d’autres objets  
- des tableaux  
- des fonctions (méthodes)

---

## ⚙️ Méthodes dans un objet
Une méthode est une **fonction stockée dans un objet**.

---

## 🔐 Récapitulatif des types d'accès

| Type | Exemple |
|------|---------|
| Clé directe | `obj.propriete` |
| Clé dynamique | `obj["propriete"]` |

---

## 🧠 Bonnes pratiques
- Utiliser des **noms de clés clairs**.
- Préférer l’accès avec `.` quand c’est possible.
- Utiliser `Object.keys/values/entries` pour parcourir proprement.
- Éviter de modifier des objets qui viennent d’autres fonctions (éviter les effets de bord).

---

## ✅ En résumé
- Un objet stocke des **paires clé–valeur**.
- Accès : `obj.prop` ou `obj["prop"]`.
- On peut **ajouter**, **modifier**, **supprimer** des propriétés.
- `Object.keys/values/entries` permettent d’explorer un objet.
- Les objets peuvent contenir **méthodes**, **tableaux**, **objets imbriqués**.
