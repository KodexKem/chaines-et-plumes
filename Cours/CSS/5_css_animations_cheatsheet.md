# 🎞️ CSS Cheat Sheet – Animations & Transitions

## ✨ Les transitions

Permettent de créer des **animations simples** lors du passage d’un état à un autre (par exemple : au survol avec `:hover`).

### Propriétés principales
- `transition-property` : la ou les propriétés à animer (ex. `color`, `background`, `all`)
- `transition-duration` : durée de l’animation (ex. `0.5s`, `200ms`)
- `transition-timing-function` : courbe de vitesse (ex. `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`)
- `transition-delay` : délai avant le début de l’animation

👉 Raccourci :
- `transition` : combine les quatre propriétés en une seule ligne.

---

## 🎬 Les animations avec `@keyframes`

Permettent de créer des animations **plus complexes et personnalisées** en définissant plusieurs étapes d’évolution.

### Étapes clés
- `@keyframes` : définit les différentes étapes de l’animation.
- `from` et `to` : définissent le début et la fin.
- `0%`, `50%`, `100%` : permettent d’ajouter des étapes intermédiaires.

---

## ⚙️ Propriétés d’animation

- `animation-name` : nom défini dans `@keyframes`.
- `animation-duration` : durée de l’animation.
- `animation-timing-function` : courbe de vitesse de l’animation.
- `animation-delay` : délai avant le début.
- `animation-iteration-count` : nombre de répétitions (`1`, `3`, `infinite`).
- `animation-direction` : direction de l’animation (`normal`, `reverse`, `alternate`, `alternate-reverse`).
- `animation-fill-mode` : comportement avant/après l’animation (`none`, `forwards`, `backwards`, `both`).
- `animation-play-state` : état de l’animation (`running`, `paused`).

👉 Raccourci :
- `animation` : combine plusieurs propriétés en une seule ligne.

---

## 💡 Astuces pratiques

- Utiliser `transform` plutôt que `top/left` pour des animations plus fluides.
- Combiner `opacity` et `transform` pour des transitions plus naturelles.
- `animation-delay` est utile pour créer des enchaînements.
