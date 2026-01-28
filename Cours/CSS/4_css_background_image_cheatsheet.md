# 🖼️ CSS Cheat Sheet – Propriétés principales de `background-image`

## 🌄 `background-image`
- Définit une image comme arrière-plan d’un élément.
- Peut accepter une image, un dégradé ou plusieurs images séparées par des virgules.

---

## 🎨 Propriétés principales associées

### `background-repeat`
- Contrôle si et comment l’image d’arrière-plan se répète.
- Valeurs courantes :
  - `repeat` : répète horizontalement et verticalement.
  - `repeat-x` : répète uniquement horizontalement.
  - `repeat-y` : répète uniquement verticalement.
  - `no-repeat` : ne se répète pas.

### `background-position`
- Définit la position de départ de l’image d’arrière-plan.
- Peut être exprimée avec des mots-clés (`top`, `center`, `bottom`, `left`, `right`) ou des unités (`px`, `%`).

### `background-size`
- Contrôle la taille de l’image d’arrière-plan.
- Valeurs courantes :
  - `auto` : taille originale.
  - `cover` : couvre tout l’élément en rognant si nécessaire.
  - `contain` : ajuste pour que l’image soit entièrement visible.

### `background-attachment`
- Détermine si l’image défile avec la page ou reste fixe.
- Valeurs principales :
  - `scroll` : défile avec le contenu.
  - `fixed` : reste fixe lors du défilement.
  - `local` : défile avec le contenu de l’élément.

---

## 🧪 Propriété raccourcie `background`
- Permet de combiner les propriétés principales (`background-image`, `background-repeat`, `background-position`, `background-size`, etc.) en une seule déclaration.

---

## 💡 Astuce
- Combiner `background-image` avec `background-size: cover;` et `background-position: center;` est une pratique courante pour créer des arrière-plans modernes et adaptatifs.
