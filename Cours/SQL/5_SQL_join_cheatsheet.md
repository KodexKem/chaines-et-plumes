# 🔗 SQL – Les JOIN (Cheat Sheet)

## 📘 Introduction

Les **JOIN** permettent de **combiner des données de plusieurs tables** en fonction d’une colonne commune (clé primaire / clé étrangère).  
Ils sont essentiels pour naviguer dans une base de données relationnelle.

---

## 🧱 Les différents types de JOIN

### ▶️ 1. INNER JOIN

Renvoie **uniquement les lignes qui correspondent dans les deux tables**.

- C’est le JOIN le plus utilisé.
- Ne garde pas les lignes sans correspondance.

**Syntaxe :**  
`SELECT colonnes FROM table1 INNER JOIN table2 ON table1.col = table2.col;`

---

### ▶️ 2. LEFT JOIN (ou LEFT OUTER JOIN)

Renvoie **toutes les lignes de la table de gauche**,  
même si aucune correspondance n’existe dans celle de droite.

- Les valeurs manquantes sont `NULL`.

**Syntaxe :**  
`SELECT colonnes FROM table1 LEFT JOIN table2 ON table1.col = table2.col;`

---

### ▶️ 3. RIGHT JOIN (ou RIGHT OUTER JOIN)

L’inverse du LEFT JOIN :  
Renvoie **toutes les lignes de la table de droite**,  
même sans correspondance à gauche.

**Syntaxe :**  
`SELECT colonnes FROM table1 RIGHT JOIN table2 ON table1.col = table2.col;`

---

### ▶️ 4. FULL JOIN (ou FULL OUTER JOIN)

Renvoie **toutes les lignes des deux tables**, qu’il y ait correspondance ou non.

- Les valeurs manquantes deviennent `NULL`.
- Tous les SGBD ne le supportent pas (par exemple MySQL sans astuces).

**Syntaxe :**  
`SELECT colonnes FROM table1 FULL JOIN table2 ON table1.col = table2.col;`

---

## 📊 Tableau récapitulatif

| Type de JOIN   | Ce qu’il renvoie                              |
| -------------- | --------------------------------------------- |
| **INNER JOIN** | Seulement les correspondances                 |
| **LEFT JOIN**  | Toutes les lignes de gauche + correspondances |
| **RIGHT JOIN** | Toutes les lignes de droite + correspondances |
| **FULL JOIN**  | Toutes les données, correspondantes ou non    |

---

## 🧠 Bonnes pratiques

- Utiliser des alias pour rendre les requêtes plus lisibles.
- Toujours préciser un `ON` pour éviter les erreurs.
- Préférer `INNER JOIN` lorsque seules les correspondances sont nécessaires.
- Utiliser `LEFT JOIN` pour récupérer une table “principale” avec des infos facultatives.

---

## ✅ En résumé

Les JOIN permettent d'exploiter la logique relationnelle entre les tables :

- **INNER JOIN** → seulement ce qui correspond
- **LEFT JOIN** → tout à gauche
- **RIGHT JOIN** → tout à droite
- **FULL JOIN** → tout partout
