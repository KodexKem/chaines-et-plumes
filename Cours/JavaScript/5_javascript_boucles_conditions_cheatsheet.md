# 🔁 JavaScript – Boucles et Conditions (Cheat Sheet)

## 📘 Introduction
Les **boucles** et **conditions** permettent de **contrôler le flux d’exécution** d’un programme.  
Elles servent à répéter du code ou à exécuter des blocs selon certaines conditions.

---

## ⚙️ Les conditions

### 🧩 `if`, `else if`, `else`
- Permet d’exécuter un bloc de code selon une condition.  
- Les conditions sont évaluées de haut en bas.

| Mot-clé | Rôle |
|----------|------|
| `if` | Vérifie une condition |
| `else if` | Ajoute une condition alternative |
| `else` | Bloc exécuté si aucune condition n’est vraie |

💡 Utiliser `===` pour les comparaisons strictes.  

---

### 🔀 `switch`
- Alternative à plusieurs `if/else`.  
- Compare une valeur à plusieurs **cas** possibles.

| Élément | Description |
|----------|--------------|
| `case` | Définit une valeur à comparer |
| `break` | Termine le bloc quand un cas est trouvé |
| `default` | Bloc exécuté si aucun cas ne correspond |

💡 Utile pour éviter les longues séries de `if/else`.

---

## 🔁 Les boucles

### 🔸 `for`
- Boucle avec un **compteur** (utilisée quand on sait combien d’itérations effectuer).  

Structure générale :
```js
for (initialisation; condition; incrémentation) {
  // code à exécuter
}
```

| Partie | Rôle |
|---------|------|
| Initialisation | Définit une variable de départ |
| Condition | Vérifie si la boucle continue |
| Incrémentation | Modifie la variable à chaque tour |

---

### 🔹 `while`
- Boucle qui s’exécute **tant qu’une condition est vraie**.

Structure :
```js
while (condition) {
  // code à exécuter
}
```

💡 Attention aux **boucles infinies** → il faut que la condition devienne fausse à un moment.

---

### 🔸 `do...while`
- Variante de `while` : s’exécute **au moins une fois**, même si la condition est fausse.

Structure :
```js
do {
  // code à exécuter
} while (condition);
```

---

## 🧠 Bonnes pratiques
- Toujours éviter les **boucles infinies**.  
- Utiliser `for` quand on connaît le nombre d’itérations.  
- Utiliser `while` quand la répétition dépend d’une condition logique.  
- Penser à utiliser `break` (pour arrêter) ou `continue` (pour passer à l’itération suivante).  
- Privilégier la clarté du code à la concision.  

---

## ✅ En résumé
- `if / else` : choix simple entre plusieurs chemins.  
- `switch` : choix entre plusieurs valeurs d’une même variable.  
- `for` : répétition avec compteur.  
- `while` : répétition conditionnelle.  
- `do...while` : exécute au moins une fois avant de tester la condition.
