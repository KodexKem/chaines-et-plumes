# 🔁 Comparatif : forEach vs for...in vs for...of

## 📘 Introduction
Ces trois syntaxes permettent de **parcourir des données** en JavaScript, mais elles ne servent pas aux mêmes choses.

---

## 📊 Tableau comparatif

| Critère | `forEach` | `for...in` | `for...of` |
|--------|-----------|------------|-------------|
| Type de structure visée | Tableaux | Objets (principalement) | Valeurs itérables (tableaux, chaînes, maps…) |
| Parcourt | Les **valeurs** du tableau | Les **clés / propriétés** | Les **valeurs** |
| Ordre garanti | Oui | Non | Oui |
| Peut utiliser `break` | ❌ Non | ✔️ Oui | ✔️ Oui |
| Peut retourner une valeur | ❌ Non | ❌ Non | ❌ Non |
| Lisibilité | Très bonne | Moyenne | Très bonne |
| Usage recommandé | Parcourir un tableau pour exécuter une action | Parcourir les propriétés d’un objet | Parcourir facilement les valeurs d’un tableau |
| Utilise un callback | ✔️ Oui | ❌ Non | ❌ Non |
| Accès automatique à l’index | ✔️ Oui (paramètre 2) | ✔️ Oui (clé) | ✔️ Oui (`entries()`) |

---

## 🧠 Résumé rapide

- **`forEach`** : Meilleur choix pour parcourir un tableau sans modifier sa structure.  
- **`for...in`** : Idéal pour parcourir les **objets**, déconseillé pour les tableaux.  
- **`for...of`** : Parfaite boucle moderne pour récupérer directement les **valeurs** d’un tableau.

