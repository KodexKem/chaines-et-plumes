# 🔐 PHP – Les Sessions (Cheat Sheet)

## 📘 Introduction

Les **sessions** en PHP permettent de **stocker des données côté serveur** afin de les conserver **entre plusieurs pages** pour un même utilisateur.  
Elles sont souvent utilisées pour gérer l’**authentification**, les **paniers**, ou les **préférences utilisateur**.

---

## ▶️ Démarrer une session

Avant toute utilisation des sessions, il faut **impérativement** démarrer la session.

- La fonction `session_start()` initialise ou reprend une session existante.
- Elle doit être appelée **avant tout affichage HTML**.

---

## 📦 Stocker des données en session

Les données de session sont stockées dans la superglobale :

- `$_SESSION`

On peut y stocker :

- des chaînes de caractères
- des nombres
- des tableaux simples

💡 Les données sont conservées tant que la session est active.

---

## 🔎 Lire des données de session

Pour accéder à une donnée :

- Il suffit de lire la clé correspondante dans `$_SESSION`.

⚠️ Toujours vérifier qu’une clé existe avant de l’utiliser pour éviter les erreurs.

---

## ✏️ Modifier une donnée de session

- Il est possible de **mettre à jour** une valeur de session en réaffectant sa clé.
- La modification est immédiatement prise en compte pour les pages suivantes.

---

## ❌ Supprimer une donnée de session

Pour supprimer **une seule variable de session** :

- Utiliser `unset()` sur la clé concernée.

👉 Utile pour retirer une information précise (ex : rôle utilisateur).

---

## 🧹 Supprimer toute la session

Pour supprimer **toutes les données de session** :

- `session_unset()`  
  → Supprime toutes les variables stockées dans `$_SESSION`.

- `session_destroy()`  
  → Détruit complètement la session côté serveur.

💡 En pratique, on utilise souvent **les deux** ensemble.

---

## 🔐 Sécurité des sessions

Bonnes pratiques :

- Toujours utiliser `session_start()` une seule fois par page.
- Régénérer l’identifiant de session après une connexion (`session_regenerate_id`).
- Détruire la session lors de la déconnexion.
- Ne jamais stocker de données sensibles non nécessaires.

---

## 🚪 Cas classique : déconnexion utilisateur

Le processus standard :

1. Supprimer les variables de session
2. Détruire la session
3. Rediriger l’utilisateur vers une page publique

---

## ✅ En résumé

- Les sessions permettent de **conserver des données entre pages**.
- `$_SESSION` stocke les informations.
- `unset()` supprime une variable.
- `session_unset()` vide la session.
- `session_destroy()` détruit complètement la session.
- Indispensable pour l’authentification et la sécurité.
