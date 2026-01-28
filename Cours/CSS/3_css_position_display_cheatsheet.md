# 📐 CSS Cheat Sheet – Positionnement et Display

## 🧱 Propriété `display`

Détermine la façon dont un élément est affiché dans le flux du document.

- `block` :  
  - L’élément occupe toute la largeur disponible.  
  - Commence toujours sur une nouvelle ligne.  
  - Exemples : `<div>`, `<p>`, `<h1>`…

- `inline` :  
  - L’élément n’occupe que l’espace nécessaire à son contenu.  
  - Ne commence pas sur une nouvelle ligne.  
  - Exemples : `<span>`, `<a>`…

- `inline-block` :  
  - Combine le comportement inline (ne va pas à la ligne) et block (peut avoir `width` et `height`).

- `none` :  
  - L’élément n’est pas affiché (retiré du flux).

- `flex` :  
  - Active le modèle **Flexbox** pour disposer les éléments enfants de manière flexible.

- `grid` :  
  - Active le modèle **Grid** pour créer des mises en page en grille.

---

## 📍 Propriété `position`

Contrôle la manière dont un élément est positionné dans la page.

- `static` *(valeur par défaut)* :  
  - L’élément suit le flux normal du document.  
  - Les propriétés `top`, `right`, `bottom`, `left` n’ont aucun effet.

- `relative` :  
  - L’élément reste dans le flux, **mais peut être déplacé** par rapport à sa position initiale avec `top`, `left`, etc.

- `absolute` :  
  - L’élément est **retiré du flux** et positionné relativement à son premier ancêtre positionné (`relative`, `absolute` ou `fixed`).

- `fixed` :  
  - L’élément est **fixé par rapport à la fenêtre** du navigateur.  
  - Il ne bouge pas au défilement.

- `sticky` :  
  - L’élément se comporte comme `relative` jusqu’à atteindre une position définie, puis devient `fixed` lors du défilement.

---

## 📏 Propriétés associées

- `top`, `right`, `bottom`, `left` : définissent l’offset de l’élément par rapport à son conteneur de positionnement.
- `z-index` : contrôle la superposition des éléments (plus la valeur est élevée, plus l’élément est au-dessus).
