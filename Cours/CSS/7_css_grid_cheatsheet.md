# 🧩 CSS Cheat Sheet – `display: grid`

## 📦 Introduction
- `display: grid` transforme un élément en **grille bidimensionnelle**.
- Il permet d’organiser les éléments enfants en **lignes et colonnes** de manière flexible et précise.

---

## 🧱 Propriétés du conteneur (parent)

### `grid-template-columns`
- Définit le nombre et la taille des colonnes.
- Peut utiliser des unités (`px`, `%`, `fr`, etc.) ou des fonctions (`repeat()`, `minmax()`).

### `grid-template-rows`
- Définit le nombre et la taille des lignes.

### `grid-template-areas`
- Permet de nommer des zones de la grille pour positionner les éléments plus facilement.

### `grid-template`
- Propriété raccourcie combinant `grid-template-rows`, `grid-template-columns` et `grid-template-areas`.

---

## 📏 Gestion automatique des lignes et colonnes

### `grid-auto-rows`
- Définit la taille automatique des lignes créées implicitement.

### `grid-auto-columns`
- Définit la taille automatique des colonnes créées implicitement.

### `grid-auto-flow`
- Contrôle comment les éléments sont automatiquement placés dans la grille.
- Valeurs principales :
  - `row` : remplissage par lignes (par défaut)
  - `column` : remplissage par colonnes
  - `row dense` / `column dense` : tente de remplir les espaces vides

---

## 📐 Alignement global du contenu

### `justify-items`
- Aligne les éléments **horizontalement** à l’intérieur de leurs cellules.
- Valeurs : `start`, `end`, `center`, `stretch` (par défaut)

### `align-items`
- Aligne les éléments **verticalement** dans leurs cellules.
- Valeurs : `start`, `end`, `center`, `stretch` (par défaut)

### `place-items`
- Propriété raccourcie pour `align-items` et `justify-items`.

---

## 📍 Alignement de l’ensemble de la grille

### `justify-content`
- Aligne la grille entière horizontalement dans son conteneur.

### `align-content`
- Aligne la grille entière verticalement dans son conteneur.

### `place-content`
- Propriété raccourcie pour `align-content` et `justify-content`.

---

## 🪄 Espacement entre les cellules

### `gap`
- Définit l’espace entre les lignes et les colonnes.
- Peut être remplacé par :
  - `row-gap` : espace entre les lignes
  - `column-gap` : espace entre les colonnes

---

## 💡 Astuces
- Utiliser l’unité `fr` pour créer des colonnes et lignes flexibles.  
- `repeat()` permet de simplifier la définition d’un grand nombre de colonnes ou de lignes.  
- `minmax()` est utile pour créer des mises en page adaptatives.
