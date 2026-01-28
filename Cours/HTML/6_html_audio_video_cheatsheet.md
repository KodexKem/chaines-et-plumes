# 🎵🎬 HTML – Balises `<audio>` & `<video>` (Cheat Sheet)

## 📦 Introduction
Les balises `<audio>` et `<video>` permettent d’intégrer des fichiers audio et vidéo dans une page web sans plugin externe. Elles prennent en charge plusieurs formats et offrent des contrôles natifs.

---

## 🔊 `<audio>`
- Sert à lire des fichiers audio.
- Peut contenir plusieurs `<source>` pour compatibilité.

**Attributs principaux :**
- `src` : chemin du fichier audio.  
- `controls` : affiche les contrôles (play, pause...).  
- `autoplay` : lecture automatique (souvent bloquée sans `muted`).  
- `loop` : boucle.  
- `muted` : démarrage silencieux.  
- `preload` : `none` / `metadata` / `auto`.

---

## 🎥 `<video>`
- Sert à lire des fichiers vidéo.  
- Supporte plusieurs formats via `<source>`.

**Attributs principaux :**
- `src` : chemin du fichier vidéo.  
- `controls` : affiche les contrôles.  
- `autoplay` : lecture automatique.  
- `loop` : boucle.  
- `muted` : silencieux.  
- `poster` : image d’attente.  
- `width`, `height` : dimensions.  
- `playsinline` : lecture inline sur mobile.

---

## 📁 `<source>` & `<track>`
- `<source>` : permet de fournir plusieurs formats.  
- `<track>` : ajoute des sous-titres ou métadonnées.

---

## 🗂️ Formats recommandés
- Audio : `mp3`, `ogg`, `wav`  
- Vidéo : `mp4` (H.264), `webm`, `ogg`

---

## ✅ Bonnes pratiques
- Utiliser `controls` pour laisser le choix à l’utilisateur.  
- Ajouter des sous-titres avec `<track>` pour l’accessibilité.  
- Éviter `autoplay` non sollicité.  
- Prévoir un fallback (texte/lien) pour les navigateurs anciens.
