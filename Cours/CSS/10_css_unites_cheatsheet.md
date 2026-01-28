# 📏 CSS Cheat Sheet – Les unités de mesure

## 🧱 Unités absolues
- Ces unités ont une valeur **fixe** et ne dépendent pas de la taille de l’écran ou de l’élément parent.

| Unité | Signification | Utilisation courante |
|-------|---------------|-----------------------|
| `px`  | Pixel         | Largeur, hauteur, marges, polices. |
| `cm`  | Centimètre    | Rarement utilisée pour les écrans, utile pour l’impression. |
| `mm`  | Millimètre    | Rarement utilisée, surtout pour l’impression. |
| `in`  | Pouce (1in = 96px) | Impression. |
| `pt`  | Point (1pt = 1/72in) | Typographie, impression. |
| `pc`  | Pica (1pc = 12pt) | Impression. |

---

## 📐 Unités relatives à la police
- Ces unités dépendent de la taille de la police de l’élément ou de son parent.

| Unité | Signification | Basé sur |
|-------|---------------|----------|
| `em`  | Taille relative | Taille de la police de l’élément parent. |
| `rem` | Taille relative racine | Taille de la police de l’élément racine (`html`). |
| `ex`  | Hauteur de la lettre « x » | Hauteur de la police actuelle. |
| `ch`  | Largeur du caractère « 0 » | Largeur du chiffre zéro dans la police actuelle. |

---

## 📱 Unités relatives à la fenêtre (viewport)
- Ces unités s’adaptent à la **taille de l’écran** ou de la fenêtre d’affichage.

| Unité | Signification | Basé sur |
|-------|---------------|----------|
| `vw`  | Viewport Width | 1vw = 1% de la largeur de la fenêtre. |
| `vh`  | Viewport Height | 1vh = 1% de la hauteur de la fenêtre. |
| `vmin` | Viewport Minimum | 1vmin = 1% du côté le plus petit (largeur ou hauteur). |
| `vmax` | Viewport Maximum | 1vmax = 1% du côté le plus grand. |

---

## 📌 Astuces pratiques
- Utiliser `rem` pour assurer une bonne accessibilité et un dimensionnement cohérent.  
- Privilégier `vw`/`vh` pour les éléments qui doivent s’adapter à la taille de l’écran.  
- Utiliser `em` pour des espacements ou tailles proportionnels au texte.  
- Les unités relatives améliorent la **responsivité** et l’**accessibilité** des sites web.
