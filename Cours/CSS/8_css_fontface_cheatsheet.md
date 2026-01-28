# ✒️ CSS Cheat Sheet – `@font-face`

## 📦 Introduction
`@font-face` est une règle CSS qui permet d’**importer et d’utiliser des polices personnalisées** sur un site web, même si elles ne sont pas installées sur l’appareil de l’utilisateur.  
Elle offre un **contrôle total sur la typographie**, ce qui améliore l’identité visuelle d’un site.

---

## 🛠️ Structure de base
- La règle `@font-face` définit une nouvelle police en indiquant :
  - son **nom personnalisé** (`font-family`) ;
  - la ou les **sources de fichiers** (`src`) ;
  - des propriétés **optionnelles** (style, poids, affichage, etc.).

---

## 📁 Propriétés principales

### `font-family`
- Nom de la police que vous définissez pour l’utiliser ensuite dans vos styles.
- Ce nom peut être arbitraire.

### `src`
- Chemin vers les fichiers de police.
- Peut contenir plusieurs formats pour une compatibilité maximale.
- Formats courants :
  - `.woff2` : format moderne, léger et recommandé.
  - `.woff` : format compressé, compatible avec tous les navigateurs récents.
  - `.ttf` / `.otf` : formats classiques TrueType / OpenType.
  - `.eot` : ancien format pour Internet Explorer.
  - `.svg` : ancien format pour navigateurs mobiles.

### `font-style`
- Définit le style de la police (ex. : `normal`, `italic`, `oblique`).

### `font-weight`
- Définit l’épaisseur de la police (ex. : `normal`, `bold`, `100-900`).

### `font-display`
- Contrôle comment la police est chargée et affichée.
- Valeurs courantes :
  - `auto` : comportement par défaut du navigateur.
  - `swap` : affiche une police de secours puis remplace par la police personnalisée dès qu’elle est chargée.
  - `fallback` : similaire à `swap` mais avec un délai court.
  - `block` : attend que la police soit chargée avant d’afficher le texte.
  - `optional` : charge la police uniquement si elle est rapidement disponible.

---

## 💡 Bonnes pratiques

- Fournir plusieurs formats (`woff2`, `woff`) pour une compatibilité maximale.  
- Utiliser `font-display: swap;` pour éviter le **FOIT** (*Flash of Invisible Text*).  
- Héberger les polices localement pour de meilleures performances.  
- Organiser les fichiers de police dans un dossier dédié (`/fonts/`).

---

## ✅ Avantages de `@font-face`

- 📐 Contrôle total sur la typographie du site.  
- 🌐 Compatibilité multi-navigateurs avec plusieurs formats.  
- 🖋️ Améliore l’identité visuelle et l’accessibilité.  

---

## ⚠️ Points d’attention

- Un trop grand nombre de polices personnalisées peut ralentir le chargement.  
- Toujours vérifier les **licences** des polices utilisées.  
- Bien choisir les formats pour assurer la **compatibilité navigateur**.
