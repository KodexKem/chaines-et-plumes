🌐 JavaScript – Méthode fetch() (Cheat Sheet)

## 📘 Introduction

`fetch()` permet de communiquer avec un serveur : récupérer, envoyer ou modifier des données.  
Elle retourne toujours une Promise.

## 🔧 Syntaxe générale

```javascript
fetch(url, options);
```

| Élément | Description                      |
| ------- | -------------------------------- |
| url     | Adresse de la ressource          |
| options | Méthode, en-têtes, données, etc. |

## 📡 Types de requêtes

| Méthode     | Utilisation               |
| ----------- | ------------------------- |
| GET         | Récupérer des données     |
| POST        | Envoyer des données       |
| PUT / PATCH | Mettre à jour des données |
| DELETE      | Supprimer des données     |

## 📥 Lire la réponse du serveur

| Méthode         | Rôle                                     |
| --------------- | ---------------------------------------- |
| response.json() | Convertit la réponse en objet JavaScript |
| response.text() | Lit la réponse sous forme de texte       |
| response.ok     | Indique si la requête a réussi           |
| response.status | Code HTTP                                |

## ⚠️ Gestion des erreurs

- `fetch()` ne génère une erreur que si le réseau échoue.
- Il faut tester `response.ok` pour détecter les erreurs HTTP.

## 🧾 En-têtes fréquents

| Header                         | Utilité                                       |
| ------------------------------ | --------------------------------------------- |
| Content-Type: application/json | Indique que les données envoyées sont du JSON |
| Accept: application/json       | Indique que l'on veut recevoir du JSON        |

## 🧠 Bonnes pratiques

- Vérifier `response.ok` avant d’utiliser la réponse.
- Utiliser `response.json()` pour décoder les données.
- Convertir les objets JS avec `JSON.stringify()`.
- Toujours prévoir un `.catch()` ou un try/catch.

## ✅ En résumé

- `fetch()` permet de communiquer avec un serveur via HTTP.
- `response.json()` est indispensable pour lire des données JSON.
- Nécessite souvent des en-têtes et `JSON.stringify()`.
- Idéal pour interagir avec des API.
