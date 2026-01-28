# 📱 CSS Cheat Sheet – Responsive Design & Media Queries

## 📦 Introduction
Le **responsive design** permet à une page web de s’adapter automatiquement à différentes tailles d’écrans : smartphones, tablettes, ordinateurs et écrans larges.  
L’objectif est d’**offrir une expérience utilisateur optimale**, quel que soit le support utilisé.

---

## 📐 Principes du responsive design

- 📏 **Grilles fluides** : utiliser des largeurs en `%`, `vw`, `em`, etc., plutôt qu’en `px`.  
- 🖼️ **Images flexibles** : adapter la taille des images à leur conteneur.  
- 🧩 **Media Queries** : appliquer des styles différents selon la taille de l’écran ou d’autres caractéristiques du périphérique.

---

## 🧠 Media Queries – Définition

Une **media query** est une règle CSS qui permet d’appliquer des styles uniquement si certaines conditions liées au périphérique sont remplies (taille de l’écran, orientation, résolution…).

Elle utilise la directive `@media` suivie de conditions (appelées *breakpoints*).

---

## 🔍 Conditions courantes

### `max-width`
- Applique les styles lorsque la largeur de la fenêtre est **inférieure ou égale** à une valeur donnée.
- Très utilisé pour cibler **les petits écrans**.

### `min-width`
- Applique les styles lorsque la largeur de la fenêtre est **supérieure ou égale** à une valeur donnée.
- Très utilisé pour une approche *mobile-first*.

### `orientation`
- Cible l’orientation de l’appareil : `portrait` (vertical) ou `landscape` (horizontal).

### `aspect-ratio`
- Permet de cibler les écrans selon leur **ratio largeur/hauteur**.

### `resolution`
- Utile pour adapter les styles aux écrans haute densité (`retina`).

---

## 📊 Breakpoints courants

| Appareil       | Largeur max.         |
|----------------|----------------------|
| 📱 Mobile      | `max-width: 480px`   |
| 📱📲 Grand mobile | `max-width: 600px` |
| 📲 Tablette    | `max-width: 768px`   |
| 💻 Ordinateur  | `max-width: 1024px`  |
| 🖥️ Écran large | `min-width: 1200px`  |

Ces valeurs peuvent varier selon vos besoins, mais elles sont couramment utilisées dans les projets web modernes.

---

## 💡 Bonnes pratiques

- 🧱 **Mobile-first** : commencez votre design pour les petits écrans puis ajoutez des styles pour les écrans plus grands avec `min-width`.  
- 📏 Évitez les valeurs fixes en `px`, privilégiez les unités relatives (`%`, `em`, `rem`, `vw`, `vh`).  
- 🎯 Utilisez des *breakpoints* pertinents basés sur votre **contenu**, pas uniquement sur les tailles d’appareils.  
- 🧪 Testez sur différents appareils et outils de simulation.

---

## ✅ Avantages d’un design responsive

- 📱 Expérience utilisateur optimisée sur tous les écrans.  
- 🌍 Amélioration du référencement SEO.  
- 💡 Meilleure accessibilité et ergonomie.  
- 📈 Taux de rebond réduit sur mobile.

---

## ⚠️ Points d’attention

- Trop de *breakpoints* peuvent rendre votre code difficile à maintenir.  
- Toujours vérifier l’affichage sur de vrais appareils.  
- Ne pas oublier d’adapter les images, polices et boutons à toutes les tailles d’écran.
