# 🌳 JavaScript – Le DOM (Cheat Sheet)

## 📘 Introduction
Le **DOM (Document Object Model)** est la **représentation du document HTML** sous forme d’arbre.  
Chaque élément du code HTML devient un **nœud** que l’on peut **lire, modifier, créer ou supprimer** avec JavaScript.

---

## 🕵️‍♂️ Sélection d’éléments

| Méthode | Description | Exemple |
|----------|--------------|----------|
| `document.getElementById()` | Sélectionne un élément par son **id** | `document.getElementById("titre")` |
| `document.getElementsByClassName()` | Sélectionne plusieurs éléments par **classe** | `document.getElementsByClassName("item")` |
| `document.getElementsByTagName()` | Sélectionne par **balise** | `document.getElementsByTagName("p")` |
| `document.querySelector()` | Sélectionne **le premier** élément correspondant à un sélecteur CSS | `document.querySelector(".menu")` |
| `document.querySelectorAll()` | Sélectionne **tous** les éléments correspondant à un sélecteur CSS | `document.querySelectorAll("div.article")` |

💡 `querySelector` et `querySelectorAll` sont les plus modernes et flexibles.

---

## 🧱 Modification du contenu

| Méthode / Propriété | Description | Exemple |
|----------------------|--------------|----------|
| `element.textContent` | Modifie ou lit le **texte** d’un élément | `titre.textContent = "Bonjour"` |
| `element.innerHTML` | Modifie ou lit le **HTML interne** | `div.innerHTML = "<b>Texte</b>"` |
| `element.value` | Lit ou modifie la **valeur d’un input** | `champ.value = "test"` |

---

## 🎨 Gestion des attributs et classes

| Méthode | Description | Exemple |
|----------|--------------|----------|
| `setAttribute()` | Définit un attribut | `img.setAttribute("src", "photo.jpg")` |
| `getAttribute()` | Récupère un attribut | `img.getAttribute("alt")` |
| `classList.add()` | Ajoute une classe | `div.classList.add("active")` |
| `classList.remove()` | Retire une classe | `div.classList.remove("hidden")` |
| `classList.toggle()` | Ajoute ou retire une classe selon l’état actuel | `menu.classList.toggle("open")` |

---

## 🧩 Création et suppression d’éléments

| Méthode | Description | Exemple |
|----------|--------------|----------|
| `document.createElement()` | Crée un nouvel élément | `const p = document.createElement("p")` |
| `element.appendChild()` | Ajoute un élément enfant | `div.appendChild(p)` |
| `element.remove()` | Supprime un élément du DOM | `p.remove()` |

---

## ⚡ Gestion des événements

| Méthode | Description | Exemple |
|----------|--------------|----------|
| `addEventListener()` | Ajoute un **écouteur d’événement** | `btn.addEventListener("click", action)` |
| `removeEventListener()` | Retire un écouteur d’événement | `btn.removeEventListener("click", action)` |

💡 Les événements courants :  
`click`, `mouseover`, `input`, `submit`, `keydown`, `scroll`, etc.

---

## 🧠 Bonnes pratiques
- Utiliser `querySelector` / `querySelectorAll` pour plus de flexibilité.  
- Éviter de trop modifier le DOM (coûteux en performance).  
- Attendre que le DOM soit chargé avant d’interagir avec lui (`DOMContentLoaded`).  
- Utiliser `classList` pour manipuler les classes plutôt que `className`.

---

## ✅ En résumé
- Le **DOM** permet de **manipuler dynamiquement le contenu HTML** avec JS.  
- On peut **sélectionner, modifier, créer, supprimer** des éléments.  
- `addEventListener` permet d’ajouter des **interactions utilisateur**.  
- Utiliser `classList` et `querySelector` pour un code moderne et propre.
