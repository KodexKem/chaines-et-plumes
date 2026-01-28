# 💡 JavaScript – Les Variables (Cheat Sheet)

## 📦 Introduction
Les **variables** permettent de stocker et manipuler des valeurs dans un programme.  
En JavaScript, on peut les déclarer avec `var`, `let` ou `const`.

---

## 🧩 Déclaration de variables

| Mot-clé | Portée | Re-déclaration | Réassignation | Particularités |
|----------|---------|----------------|----------------|----------------|
| `var` | Fonctionnelle | ✅ Oui | ✅ Oui | Ancienne syntaxe, à éviter (problèmes de portée). |
| `let` | Bloc `{}` | ❌ Non | ✅ Oui | Recommandé pour les variables modifiables. |
| `const` | Bloc `{}` | ❌ Non | ❌ Non | Recommandé pour les valeurs constantes. |

---

## 🔍 Portée (Scope)
- **Globale** : accessible partout (si déclarée hors fonction).  
- **Locale (fonction)** : accessible uniquement dans une fonction (`var`).  
- **Bloc (`{}`)** : accessible uniquement dans le bloc où elle est déclarée (`let`, `const`).  

---

## 🔁 Hoisting
JavaScript “remonte” les déclarations de variables au début du code, mais **pas leurs valeurs**.  
- `var` est initialisée à `undefined`.  
- `let` et `const` sont **en zone morte temporaire** (erreur si utilisées avant déclaration).  

---

## 🔄 Réassignation et mutation
- `let` permet de changer la valeur d’une variable.  
- `const` empêche la réassignation, **mais** les objets et tableaux restent modifiables.  

Exemple :
```js
const person = { name: "Alice" };
person.name = "Bob"; // ✅ OK
person = {};         // ❌ Erreur
```

---

## 🧠 Bonnes pratiques
- Utiliser **`const`** par défaut.  
- Passer à **`let`** uniquement si la valeur doit changer.  
- Éviter **`var`** (comportement obsolète et imprévisible).  
- Nommer les variables de manière claire (`camelCase`).  

---

## ✅ En résumé
- `var` → ancien, à éviter.  
- `let` → variable modifiable, portée bloc.  
- `const` → constante, portée bloc.  
- JavaScript remonte les déclarations (hoisting), mais pas les valeurs.  
- Toujours privilégier `const` pour un code plus sûr et lisible.
