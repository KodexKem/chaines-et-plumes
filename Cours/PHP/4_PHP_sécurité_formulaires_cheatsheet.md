# 🔐 PHP – Sécurité des formulaires (Cheat Sheet)

## 📘 Introduction

La **sécurité des formulaires** en PHP est essentielle pour éviter les failles courantes comme :

- l’injection SQL
- le XSS (Cross-Site Scripting)
- l’envoi de données non valides
- la falsification de requêtes

---

## 🧾 Vérifier l’envoi du formulaire

Toujours vérifier que le formulaire a bien été soumis.

- Avec `POST` : vérifier `$_POST`
- Avec `GET` : vérifier `$_GET`

Principe :

- Tester l’existence des données
- Tester qu’elles ne sont pas vides

---

## 🧹 Nettoyer les données utilisateur

Les données envoyées par un utilisateur **ne sont jamais fiables**.

Actions recommandées :

- Supprimer les espaces inutiles
- Neutraliser le HTML
- Échapper les caractères spéciaux

Fonctions courantes :

- `trim()` → supprime les espaces
- `htmlspecialchars()` → empêche l’injection HTML
- `strip_tags()` → supprime les balises HTML

---

## ❌ Protection contre le XSS

Le **XSS** permet d’injecter du code HTML ou JavaScript.

Bonnes pratiques :

- Toujours échapper les données avant affichage
- Ne jamais afficher directement une entrée utilisateur
- Utiliser `htmlspecialchars()` avec `ENT_QUOTES`

---

## 🧨 Protection contre l’injection SQL

Ne jamais insérer directement les données utilisateur dans une requête SQL.

Règles essentielles :

- Utiliser **PDO avec des requêtes préparées**
- Ne jamais concaténer les valeurs dans la requête
- Laisser PDO gérer l’échappement

---

## 🔐 Validation des données

Toujours vérifier que les données respectent le **format attendu**.

Exemples de validations :

- Email valide
- Nombre entier
- Longueur minimale / maximale
- Valeur autorisée (liste blanche)

Outils utiles :

- `filter_var()`
- Comparaisons (`===`)
- Expressions régulières (regex)

---

## ⏱️ Protection contre les soumissions multiples

Éviter qu’un formulaire soit envoyé plusieurs fois.

Solutions :

- Redirection après traitement (Post/Redirect/Get)
- Désactiver le bouton après clic
- Utiliser un token de session

---

## 🛡️ CSRF (Cross-Site Request Forgery)

Attaque consistant à forcer l’envoi d’un formulaire à l’insu de l’utilisateur.

Protection :

- Générer un **token unique** stocké en session
- Vérifier le token à la réception du formulaire
- Refuser la requête si le token est invalide

---

## 🧠 Bonnes pratiques générales

- Toujours vérifier **existence + validité** des champs
- Ne jamais faire confiance à l’utilisateur
- Séparer validation, traitement et affichage
- Afficher des messages d’erreur clairs mais non techniques
- Ne jamais afficher d’erreurs SQL en production

---

## ✅ En résumé

- Nettoyer toutes les entrées utilisateur
- Valider les données côté serveur
- Protéger contre XSS, SQL injection et CSRF
- Utiliser PDO et les requêtes préparées
- Ne jamais afficher directement les données brutes
