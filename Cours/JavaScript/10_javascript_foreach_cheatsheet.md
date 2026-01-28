# 🔁 JavaScript – La boucle forEach (Cheat Sheet)

## 📘 Introduction
`forEach` est une **méthode des tableaux** permettant d’exécuter une fonction **pour chaque élément** du tableau.  
Elle est idéale pour **parcourir** un tableau sans gérer d’index manuellement.

---

## 🧩 Syntaxe
`tableau.forEach((élément, index, tableau) => { ... })`

| Paramètre | Rôle |
|-----------|------|
| `élément` | Valeur actuelle |
| `index` (optionnel) | Position de l’élément dans le tableau |
| `tableau` (optionnel) | Référence au tableau d’origine |

💡 Seul le premier paramètre est vraiment utilisé dans la plupart des cas.

---

## 🎯 Points importants
- `forEach` **ne renvoie rien** (`undefined`).  
- `return` **ne stoppe pas** la boucle.  
- Ne permet **pas de break**, contrairement à `for`.  
- Utile pour exécuter une action sur chaque élément.

---

## 🧠 Bonnes pratiques
- Utiliser `forEach` pour **parcourir un tableau sans modification de structure**.
- Préférer `map`, `filter`, ou `reduce` pour transformer les données.
- Utiliser des **fonctions fléchées** pour une syntaxe plus courte.

---

## ✅ En résumé
- `forEach` parcourt un tableau **élément par élément**.
- Exécute une fonction pour chaque valeur.
- Pas de `break` ni de valeur de retour.
- Idéal pour les actions simples répétitives.
