// les objets permettent de stocker plusieurs valeurs dans une seule variable
let Formateur = {
  prenom: "Enzo",
  nom: "Nebor",
  age: 27,
  fatigue: true,
  action: function () {
    console.log("Je raconte n'importe quoi !");
  },
  inventaire: ["Clés", "Teléphone", "Porte-clé en silicone"],
};

// il est possible d'accéder aux différentes propriétés de l'objet en utilisant le nom de l'objet suivi d'un point et du nom de la propriété
console.log(Formateur.prenom);
console.log(Formateur.nom);

// on peut aussi accéder aux propriétés avec des crochets
console.log(Formateur["age"]);
console.log(Formateur["fatigue"]);

// on peut modifier les propriétés d'un objet
Formateur.age = 27.5;
console.log(Formateur.age);

// on peut ajouter de nouvelles propriétés à un objet
Formateur.charisme = "100%";
console.log(Formateur.charisme);

// on peut appeler une méthode d'un objet
Formateur.action();

// on peut accéder aux éléments d'un tableau qui est une propriété d'un objet
console.log(Formateur.inventaire[1]);
