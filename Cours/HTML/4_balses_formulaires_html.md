# Les balises relatives aux formulaires en HTML

## `<form>`
- Balise principale qui définit un formulaire.
- Contient tous les champs et boutons permettant la saisie et l’envoi de données.

## `<fieldset>`
- Permet de regrouper logiquement plusieurs champs dans un formulaire.

## `<legend>`
- Définit un titre ou une légende pour un groupe de champs (`<fieldset>`).

## `<input>`
- Champ de saisie polyvalent dont le type varie selon l’attribut `type`.

### Types courants :
- `text` : champ de saisie d’une ligne de texte.
- `number` : champ de saisie numérique.
- `date` : champ pour sélectionner une date.
- `password` : champ de saisie masquée (mot de passe).
- `email` : champ de saisie pour une adresse email.
- `checkbox` : case à cocher (permet plusieurs sélections).
- `radio` : bouton radio (permet une sélection unique dans un groupe).
  - **Important :** tous les boutons radio d’un même groupe doivent avoir le même attribut `name`.

## `<textarea>`
- Zone de saisie de texte sur plusieurs lignes.
- Utilisée pour des commentaires ou des champs de texte longs.

## `<button>`
- Définit un bouton dans un formulaire.
- Peut servir à envoyer (`submit`), réinitialiser (`reset`) ou effectuer une action personnalisée.
