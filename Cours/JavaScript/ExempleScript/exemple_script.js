// exemple de IF
let age = 20;

function exif() {
  if (age >= 18) {
    console.log("Vous êtes majeur.");
  } else if (age === 18) {
    console.log("Vous venez juste d'atteindre la majorité.");
  } else {
    console.log("Vous êtes mineur.");
  }
}

// exemple de SWITCH
let jour = 3;

function exswitch() {
  switch (jour) {
    case 1:
      console.log("Lundi");
      break;
    case 2:
      console.log("Mardi");
      break;
    case 3:
      console.log("Mercredi");
      break;
    case 4:
      console.log("Jeudi");
      break;
    case 5:
      console.log("Vendredi");
      break;
    case 6:
      console.log("Samedi");
      break;
    case 7:
      console.log("Dimanche");
      break;
    default:
      console.log("Jour invalide");
  }
}

// exemple de WHILE
let compteur = 1;

function exwhile() {
  while (compteur <= 5) {
    console.log("Compteur est à: " + compteur);
    compteur++;
  }
}

// exemple de FOR

function exfor() {
  for (let i = 1; i <= 5; i++) {
    console.log("i est à: " + i);
  }
}

// exemple de DO...WHILE
let nombre = 1;

function exdowhile() {
  do {
    console.log("Nombre est à: " + nombre);
    nombre++;
  } while (nombre <= 5);
}
