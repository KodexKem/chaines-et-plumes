# 🧮 SQL – Les Groupements (GROUP BY & HAVING)

## 📘 Introduction

Les groupements permettent de **regrouper des lignes** ayant des valeurs communes, souvent pour effectuer des **calculs** (compter, additionner, calculer des moyennes…).

---

## 🧱 GROUP BY

`GROUP BY` regroupe les lignes ayant la même valeur dans une ou plusieurs colonnes.

Exemples d’utilisation :

- Regrouper les ventes par client
- Compter le nombre d’articles par catégorie
- Calculer la moyenne par groupe

Syntaxe :
GROUP BY colonne

---

## 🔢 Fonctions d’agrégation avec GROUP BY

Les fonctions courantes utilisées avec `GROUP BY` :

- COUNT() — compter le nombre d’éléments
- SUM() — calculer une somme
- AVG() — calculer une moyenne
- MIN() — valeur la plus basse
- MAX() — valeur la plus haute

---

## 🔍 HAVING (filtrer après le groupement)

Contrairement à `WHERE`, qui filtre avant le regroupement,  
`HAVING` filtre **après** le `GROUP BY`.

Utile pour :

- Trouver les groupes dépassant un seuil
- Ignorer les groupes trop petits
- Filtrer selon un calcul d’agrégation

Syntaxe :
HAVING condition_sur_agrégation

---

## 🧠 Différence entre WHERE et HAVING

- **WHERE** filtre les lignes _avant_ le groupement
- **HAVING** filtre les groupes _après_ le groupement

Exemples typiques :

- WHERE prix > 10
- HAVING COUNT(\*) > 5

---

## 🎯 Bonnes pratiques

- Toujours placer `GROUP BY` avant `HAVING`
- Utiliser `HAVING` uniquement pour filtrer des valeurs calculées
- Vérifier que les colonnes non agrégées apparaissent dans `GROUP BY`

---

## ✅ En résumé

- `GROUP BY` regroupe les lignes selon une colonne.
- S’utilise avec des fonctions d’agrégation (COUNT, SUM, AVG…).
- `HAVING` sert à filtrer les résultats après le groupement.
- `WHERE` filtre avant, `HAVING` filtre après.
