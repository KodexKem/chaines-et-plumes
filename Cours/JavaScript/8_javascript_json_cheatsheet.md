# 📦 JavaScript – JSON (Cheat Sheet)

## 📘 Introduction
**JSON** (JavaScript Object Notation) est un **format de données** utilisé pour **stocker** et **échanger** des informations.  
Il ressemble aux **objets JavaScript**, mais c’est **toujours du texte**.

---

## 🧱 Règles importantes
- Les **clés** doivent être **entre guillemets**.
- Les **chaînes de texte** doivent utiliser des **guillemets doubles**.
- Les données doivent être **bien formatées** (pas de virgule après le dernier élément).

---

## 🔁 Convertir JSON ↔ JavaScript

| Méthode | Rôle | Direction |
|--------|------|-----------|
| `JSON.parse()` | Convertit du **JSON → JavaScript** | Texte → Objet |
| `JSON.stringify()` | Convertit du **JavaScript → JSON** | Objet → Texte |

---

## 🧩 Types de données acceptés en JSON

| Type | Exemple |
|------|--------|
| Objet | `{ "nom": "Alice" }` |
| Tableau | `[1, 2, 3]` |
| Chaîne | `"texte"` |
| Nombre | `42` |
| Booléen | `true` / `false` |
| Null | `null` |

💡 **Pas** de fonctions, `undefined` ou `Date` directement en JSON.

---

## 🔌 JSON et API
JSON est le **format le plus utilisé** pour échanger des données entre :
- Front-end ↔ Serveur
- Applications ↔ Bases de données
- Services web / API

---

## 🧠 Bonnes pratiques
- Toujours **valider** le format JSON avant utilisation.
- Utiliser `JSON.stringify(obj, null, 2)` pour obtenir un JSON **lisible**.
- Ne jamais mettre de **commentaires** dans un fichier `.json`.

---

## ✅ En résumé
- JSON est un **format texte**.
- Il permet de **stocker** et **transmettre** des données.
- `JSON.parse()` → transforme du **texte JSON** en **objet JS**.
- `JSON.stringify()` → transforme un **objet JS** en **texte JSON**.
- Très utilisé pour la **communication entre applications**.
