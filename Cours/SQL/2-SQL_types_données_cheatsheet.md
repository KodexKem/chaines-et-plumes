# 🗄️ SQL – Types de Données (Cheat Sheet)

## 📘 Introduction

En SQL, chaque colonne d’une table possède un **type de données**, définissant la nature des valeurs qu’elle peut contenir (texte, nombres, dates, booléens, etc.).

---

## 🔤 Types de données textuelles

### **CHAR(n)**

- Longueur fixe
- Complété avec des espaces si la valeur est plus courte
- Exemple : codes postaux, abréviations

### **VARCHAR(n)**

- Longueur variable
- Le plus utilisé pour les textes
- Exemple : noms, emails, adresses

### **TEXT**

- Très longues chaînes de texte
- Pour biographies, descriptions, commentaires

---

## 🔢 Types numériques

### **INT**

- Nombre entier
- Exemple : âge, identifiant numérique

### **BIGINT**

- Très grands entiers
- Exemple : valeurs dépassant la limite de INT

### **FLOAT**

- Nombre décimal **approximatif**

### **DECIMAL(p, s)**

- Nombre décimal **précis**
- p = précision totale
- s = décimales
- Exemple : prix, taux, calculs financiers

---

## 📅 Dates et temps

### **DATE**

- Format : AAAA-MM-JJ
- Exemple : date de naissance

### **TIME**

- Format : HH:MM:SS
- Heure seule

### **DATETIME** ou **TIMESTAMP**

- Date **et** heure
- Exemple : enregistrement d’une commande

---

## 🔘 Booléens

### **BOOLEAN** ou **TINYINT(1)** selon les systèmes

- Valeurs possibles : `TRUE` / `FALSE`
- Utilisé pour états : actif, validé, payé…

---

## 🔗 Types spéciaux (selon SGBD)

### **ENUM**

- Liste de valeurs possibles
- Exemple : `"Homme", "Femme", "Autre"`

### **BLOB**

- Stockage binaire
- Exemple : images, fichiers

---

## 🧠 Bonnes pratiques

- Utiliser **VARCHAR** plutôt que TEXT sauf si très long contenu.
- Préférer **DECIMAL** pour les valeurs financières.
- Choisir un type adapté pour optimiser performance et stockage.
- Toujours prévoir une taille raisonnable pour les VARCHAR.

---

## ✅ En résumé

- Textes : CHAR, VARCHAR, TEXT
- Nombres : INT, BIGINT, FLOAT, DECIMAL
- Dates : DATE, TIME, DATETIME
- Booléens : BOOLEAN
- Spéciaux : ENUM, BLOB
