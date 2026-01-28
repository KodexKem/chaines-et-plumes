# 📐 CSS Cheat Sheet – `display: flex`

## 📦 Introduction
- `display: flex` transforme un conteneur en **boîte flexible**.
- Il permet de gérer plus facilement la **disposition, l’alignement et l’espace** entre les éléments enfants.
- Les éléments directs deviennent des **flex items**.

---

## 🧱 Propriétés du conteneur (parent)

### `flex-direction`
- Définit l’axe principal d’alignement des éléments.
- Valeurs :
  - `row` : horizontal (par défaut).
  - `row-reverse` : horizontal inversé.
  - `column` : vertical.
  - `column-reverse` : vertical inversé.

### `flex-wrap`
- Contrôle le retour à la ligne des éléments.
- Valeurs :
  - `nowrap` : tous les éléments sur une seule ligne (par défaut).
  - `wrap` : retour à la ligne si nécessaire.
  - `wrap-reverse` : retour à la ligne en sens inverse.

### `flex-flow`
- Propriété raccourcie pour `flex-direction` + `flex-wrap`.

### `justify-content`
- Aligne les éléments le long de l’axe principal.
- Valeurs principales :
  - `flex-start` : alignés au début.
  - `flex-end` : alignés à la fin.
  - `center` : centrés.
  - `space-between` : espace égal entre eux.
  - `space-around` : espace égal autour d’eux.
  - `space-evenly` : espaces égaux entre et autour.

### `align-items`
- Aligne les éléments sur l’axe transversal.
- Valeurs principales :
  - `stretch` : étirés (par défaut).
  - `flex-start` : alignés au début.
  - `flex-end` : alignés à la fin.
  - `center` : centrés.
  - `baseline` : alignés sur la ligne de base du texte.

### `align-content`
- Aligne plusieurs lignes de flex sur l’axe transversal (utile uniquement si `flex-wrap` est activé).
- Valeurs :
  - `stretch`
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`

---

## 💡 Astuce
- Combiner `justify-content`, `align-items` et `flex-direction` permet d’obtenir une mise en page flexible rapidement.
