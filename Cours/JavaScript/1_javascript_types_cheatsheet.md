# 🧠 JavaScript – Types de données (Cheat Sheet)

## 📦 Introduction
JavaScript est un langage **dynamiquement typé**, ce qui signifie qu’il n’est pas nécessaire de déclarer le type d’une variable à l’avance.  
Le type d’une valeur peut changer au cours de l’exécution.

---

## 🔢 Types primitifs
Les **types primitifs** représentent des valeurs simples et immuables.

| Type | Description | Exemple |
|------|--------------|----------|
| `string` | Chaîne de caractères | `"Bonjour"` |
| `number` | Nombre (entier ou flottant) | `42`, `3.14` |
| `boolean` | Vrai ou faux | `true`, `false` |
| `undefined` | Variable déclarée mais sans valeur | `let x;` |
| `null` | Valeur vide/intentionnelle | `let y = null;` |
| `bigint` | Entiers très grands | `123n` |
| `symbol` | Identifiant unique | `Symbol("id")` |

---

## 🧱 Type complexe
| Type | Description | Exemple |
|------|--------------|----------|
| `object` | Regroupe des paires clé/valeur | `{ nom: "Alice", age: 25 }` |

Les objets incluent :  
- Tableaux (`[]`)  
- Fonctions (`function`)  
- Dates (`new Date()`)  
- Maps, Sets, etc.

---

## 🧩 Vérifier le type d’une valeur
- `typeof valeur` → renvoie une chaîne représentant le type.  
  Exemple :  
  ```js
  typeof 42       // "number"
  typeof "test"   // "string"
  typeof null     // "object" (particularité historique)
  typeof []       // "object"
  typeof undefined // "undefined"
  ```

---

## 🔄 Conversion de type
JavaScript convertit souvent les types **automatiquement** (coercition), mais il est aussi possible de le faire **explicitement** :
- En chaîne : `String(valeur)`
- En nombre : `Number(valeur)`
- En booléen : `Boolean(valeur)`

---

## ⚠️ À savoir
- `null` et `undefined` sont différents (`null == undefined` est vrai, mais `null === undefined` est faux).  
- Les tableaux et fonctions sont de type `object`.  
- `typeof NaN` renvoie `"number"` (autre particularité historique).  
- Les variables non définies renvoient `undefined`.

---

## ✅ En résumé
- 7 types primitifs : `string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`.  
- 1 type complexe : `object`.  
- `typeof` permet d’identifier le type.  
- Attention aux conversions automatiques et aux particularités (`null`, `NaN`, etc.).
