# ⚙️ JavaScript – Les Fonctions (Cheat Sheet)

## 📘 Introduction

Les **fonctions** permettent de regrouper du code réutilisable.  
Elles peuvent prendre des **paramètres**, effectuer des **actions**, et **retourner une valeur**.

---

## 🧩 Déclaration de fonction

| Type                   | Syntaxe                          | Particularités                     |
| ---------------------- | -------------------------------- | ---------------------------------- |
| Déclaration classique  | `function nom() { ... }`         | Définie au chargement du script.   |
| Expression de fonction | `const nom = function() { ... }` | Assignée à une variable.           |
| Fonction fléchée       | `const nom = () => { ... }`      | Syntaxe courte, ne lie pas `this`. |

---

## 🔁 Paramètres et retour

- Les fonctions peuvent recevoir des **paramètres** et retourner des valeurs avec `return`.
- Si aucun `return` n’est présent, la fonction renvoie `undefined`.

Exemple :

```js
function addition(a, b) {
  return a + b;
}
```

---

## 🧮 Fonctions anonymes et fléchées

- Les **fonctions anonymes** n’ont pas de nom, souvent utilisées dans des callbacks.
- Les **fonctions fléchées** ont une syntaxe concise :
  ```js
  const carre = (x) => x * x;
  ```

---

## 🧱 Paramètres par défaut

- Une fonction peut définir des valeurs par défaut pour ses paramètres :
  ```js
  function saluer(nom = "Inconnu") {
    return "Bonjour " + nom;
  }
  ```

---

## ⚡ Fonctions et portée

- Une variable déclarée **à l’intérieur** d’une fonction n’est accessible **que dans celle-ci**.
- Les fonctions permettent d’isoler le code pour éviter les conflits de variables.

---

## 🧠 Bonnes pratiques

- Utiliser `const` pour déclarer les fonctions fléchées.
- Donner un **nom clair et descriptif** aux fonctions.
- Éviter les fonctions trop longues ou trop imbriquées.
- Préférer les fonctions fléchées dans les callbacks (`map`, `forEach`, `filter`).

---

## ✅ En résumé

- Les fonctions servent à **réutiliser du code**.
- `function` classique → bénéficie du hoisting.
- `const = function()` ou `() =>` → non remontée.
- Toujours viser **clarté et réutilisabilité**.
