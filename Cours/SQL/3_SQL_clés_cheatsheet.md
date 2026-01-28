# 🔑 SQL – Clés primaires & clés étrangères (Cheat Sheet)

## 📘 Introduction

Les clés **primaires** et **étrangères** sont essentielles pour organiser et relier les données dans une base SQL.  
Elles garantissent la **cohérence**, la **fiabilité** et la **structure** des tables.

---

## 🔐 Clé primaire (PRIMARY KEY)

### 📌 Définition

Une **clé primaire** est une colonne (ou un groupe de colonnes) qui :

- Identifie **de manière unique** chaque ligne d’une table
- Ne peut pas être `NULL`
- Ne peut pas contenir de doublons

### 📍 Caractéristiques

- Une table ne peut avoir **qu'une seule clé primaire**
- Souvent utilisée : `id` auto-incrémenté
- Sert de référence dans d’autres tables

### 🧱 Déclaration

Exemples observables :

- Définition d'une clé primaire dans une création de table
- Utilisation d'un champ unique pour identifier un enregistrement

---

## 🔗 Clé étrangère (FOREIGN KEY)

### 📌 Définition

Une **clé étrangère** est une colonne qui :

- Fait référence à la **clé primaire d’une autre table**
- Crée une **relation** entre deux tables
- Garantit que la valeur existe dans la table référencée

### 📍 Caractéristiques

- Assure l’intégrité référentielle
- Empêche de créer une valeur qui ne correspond pas à une clé primaire existante
- Peut imposer des actions (`CASCADE`, `SET NULL`, etc.) lors de la suppression ou modification

### 🧱 Déclaration

Exemples observables :

- Colonne servant de lien vers une autre table
- Contrainte affichant la référence à une clé primaire

---

## 🔄 Relation entre les tables

### 💠 1️⃣→1️⃣ Relation un à un

Chaque entrée d’une table correspond à **exactement une** entrée d’une autre.

### 💠 1️⃣→∞ Relation un à plusieurs

Une ligne de la table A peut correspondre à **plusieurs** lignes de la table B.  
C’est le cas le plus fréquent (ex. utilisateur → commandes).

### 💠 ∞→∞ Relation plusieurs à plusieurs

Nécessite une **table intermédiaire** contenant deux clés étrangères.

---

## 🧠 À retenir

- La **clé primaire** identifie une ligne de manière unique.
- La **clé étrangère** relie une table à une autre.
- Ensemble, elles permettent de structurer une base relationnelle.
- La clé étrangère empêche les incohérences (ex : données orphelines).
- Indispensables pour les **JOINS** et les **relations logiques** entre tables.
