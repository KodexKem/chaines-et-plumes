# ➕ JavaScript – Les Opérateurs (Cheat Sheet)

## 📘 Introduction
Les **opérateurs** en JavaScript permettent de réaliser des opérations sur des valeurs (variables, constantes, expressions).

---

## 🔢 Opérateurs arithmétiques

| Opérateur | Description | Exemple |
|------------|--------------|----------|
| `+` | Addition | `x + y` |
| `-` | Soustraction | `x - y` |
| `*` | Multiplication | `x * y` |
| `/` | Division | `x / y` |
| `%` | Modulo (reste) | `x % y` |
| `**` | Puissance | `x ** y` |
| `++` | Incrémentation | `x++` |
| `--` | Décrémentation | `x--` |

---

## ⚖️ Opérateurs de comparaison

| Opérateur | Description | Exemple | Résultat |
|------------|--------------|----------|-----------|
| `==` | Égalité (valeur) | `5 == "5"` | `true` |
| `===` | Égalité stricte (valeur + type) | `5 === "5"` | `false` |
| `!=` | Différent (valeur) | `5 != "5"` | `false` |
| `!==` | Différent strict | `5 !== "5"` | `true` |
| `>` | Supérieur à | `x > y` | |
| `<` | Inférieur à | `x < y` | |
| `>=` | Supérieur ou égal | `x >= y` | |
| `<=` | Inférieur ou égal | `x <= y` | |

---

## 🔄 Opérateurs logiques

| Opérateur | Description | Exemple | Résultat |
|------------|--------------|----------|-----------|
| `&&` | ET logique | `x > 0 && y > 0` | `true` si les deux sont vrais |
| `||` | OU logique | `x > 0 || y > 0` | `true` si l’un est vrai |
| `!` | NON logique | `!true` | `false` |

---

## 💡 Opérateurs d’affectation

| Opérateur | Description | Exemple |
|------------|--------------|----------|
| `=` | Affectation simple | `x = 5` |
| `+=` | Addition et affectation | `x += 2` |
| `-=` | Soustraction et affectation | `x -= 2` |
| `*=` | Multiplication et affectation | `x *= 2` |
| `/=` | Division et affectation | `x /= 2` |
| `%=` | Modulo et affectation | `x %= 2` |

---

## 🔀 Opérateurs divers

| Opérateur | Description | Exemple |
|------------|--------------|----------|
| `typeof` | Donne le type d’une valeur | `typeof "Hello"` → `"string"` |
| `? :` | Opérateur ternaire (condition courte) | `x > 0 ? "positif" : "négatif"` |

---

## ✅ En résumé
- Les opérateurs permettent de **comparer, calculer et affecter** des valeurs.  
- Utiliser `===` et `!==` pour éviter les confusions de type.  
- Les opérateurs logiques combinent plusieurs conditions.  
- `typeof` est utile pour tester le **type** des valeurs.
