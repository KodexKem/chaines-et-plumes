# 📦 JavaScript – Les Tableaux (Array) (Cheat Sheet)

## 📘 Introduction
Un **Array** est une **liste ordonnée de valeurs**.  
Chaque valeur possède un **index**, et le premier index est **0**.

---

## 🔎 Accéder à un élément
| Opération | Description |
|----------|-------------|
| `tableau[index]` | Récupère l'élément à la position donnée |

---

## 🧠 Propriétés utiles
| Propriété | Rôle |
|----------|------|
| `length` | Renvoie le **nombre d’éléments** du tableau |

---

## ✏️ Méthodes pour modifier un tableau

| Méthode | Action | Effet |
|--------|--------|-------|
| `push()` | Ajouter **à la fin** | Le tableau s’allonge |
| `pop()` | Supprimer **le dernier** | Le tableau se raccourcit |
| `unshift()` | Ajouter **au début** | Les index de tous les éléments changent |
| `shift()` | Supprimer **le premier** | Les index de tous les éléments changent |
| `splice(début, quantité)` | Supprimer ou remplacer depuis un index | Permet de retirer plusieurs éléments |
| `slice()` | Copier un tableau | Ne modifie pas l’original |

---

## 🧭 Rechercher dans un tableau

| Méthode | Rôle |
|--------|------|
| `indexOf(valeur)` | Renvoie l’**index** d’une valeur (ou `-1` si non trouvée) |

---

## ✅ En résumé
- Un Array permet de **stocker plusieurs valeurs** dans une seule variable.
- L’index **commence à 0**.
- `length` indique la **taille** du tableau.
- `push/pop/unshift/shift` modifient le tableau.
- `slice` **copie**, `splice` **retire/remplace**.
