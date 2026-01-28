# 📌 Cheat Sheet - Commandes Linux Essentielles

## 🔎 Navigation et gestion de fichiers

- `pwd` → afficher le chemin courant
- `ls -la` → lister fichiers (détails + cachés)
- `cd <dossier>` → changer de répertoire
- `tree` → afficher l’arborescence

## 📂 Manipulation de fichiers et dossiers

- `cp src dest` → copier fichier/dossier
- `mv src dest` → déplacer ou renommer
- `rm -r dossier` → supprimer un dossier (⚠️ irréversible)
- `touch fichier` → créer un fichier vide
- `mkdir -p dossier` → créer dossier (avec arborescence)

## 📖 Lecture et édition

- `cat fichier` → afficher le contenu
- `head fichier` / `tail fichier` → début/fin du fichier
- `nano fichier` ou `vim fichier` → éditer un fichier

## 🔑 Droits et utilisateurs

- `whoami` → utilisateur courant
- `chmod +x fichier` → modifier permissions
- `chown user fichier` → changer propriétaire
- `sudo commande` → exécuter en admin

## 📦 Paquets

- `apt update` / `apt upgrade` → mise à jour des paquets
- `apt install <package>` → installer un paquet

## 🧰 Divers

- `history` → afficher l’historique des commandes
- `!!` → répéter dernière commande
- `grep "mot" fichier` → recherche dans fichier
- `zip nom_archive dossier/` → compresser en .zip
- `unzip nom_archive` → décompresser
- `alias ll='ls -l'` → créer un raccourci
