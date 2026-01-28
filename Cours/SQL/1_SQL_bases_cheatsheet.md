# 🗄️ SQL – Cheat Sheet (Bases essentielles)

## 📘 Introduction

SQL (Structured Query Language) est un langage utilisé pour interagir avec des bases de données : lire, ajouter, modifier ou supprimer des données.

---

## 🔎 Sélectionner des données

### SELECT

Permet de récupérer des données.

– SELECT colonne1, colonne2 FROM table;  
– SELECT \* FROM table; (toutes les colonnes)

### WHERE – Filtrer les résultats

– SELECT \* FROM table WHERE condition;

**Opérateurs possibles :**  
=, >, <, >=, <=, !=, LIKE, IN, BETWEEN

---

## 🧮 Trier et limiter

### ORDER BY

– SELECT _ FROM table ORDER BY colonne ASC;  
– SELECT _ FROM table ORDER BY colonne DESC;

### LIMIT

– SELECT \* FROM table LIMIT 10;

---

## 🧩 Gérer les données

### INSERT

– INSERT INTO table (col1, col2) VALUES (val1, val2);

### UPDATE

– UPDATE table SET col = val WHERE condition;

### DELETE

– DELETE FROM table WHERE condition;

---

## 📦 Fonctions utiles

– SELECT COUNT(\*) FROM table;  
– SELECT AVG(prix) FROM produits;

Fonctions disponibles : COUNT(), SUM(), AVG(), MIN(), MAX()

---

## 🧱 Créer ou supprimer une table

### CREATE TABLE

Exemple : créer une table avec id, nom et age.  
– CREATE TABLE nom (id INT PRIMARY KEY, nom VARCHAR(50), age INT);

### DROP TABLE

– DROP TABLE nom;

---

## 🔗 Relations entre tables

### JOIN – Relier deux tables

– SELECT \* FROM t1 JOIN t2 ON t1.id = t2.id;

Types de JOIN : INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN

---

## ✅ Résumé

– SELECT → lire  
– INSERT → ajouter  
– UPDATE → modifier  
– DELETE → supprimer  
– JOIN → relier des tables  
– WHERE, ORDER BY, LIMIT → filtrer et trier les résultats
