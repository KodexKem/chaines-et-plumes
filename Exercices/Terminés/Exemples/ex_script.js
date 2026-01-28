let aleatoire = Math.floor(Math.random() * 4);

const Meteo = "Soleil";

// console.log affiche sur la console |
// if = si (unique)
if (Meteo === "Soleil") {
  console.log("Il fait beau");
}

// else if = sinon si
else if (Meteo === "Pluie") {
  console.log("Il pleut");
}

// else = sinon (unique)
else {
  console.log("Meteo inconnue");
}

// switch - à utiliser si trop de paramètres (plus "propre" que if...)

switch (aleatoire) {
  case 0:
    console.log("Zero");
    break;

  case 1:
    console.log("Un");
    break;

  case 2:
    console.log("Deux");
    break;

  case 3:
    console.log("Trois");
    break;

  default:
    console.log("Nombre inconnu");
}

// si trop de conditions, préféré "switch" à "if"

// while = Tant que (effectue la boucle tant que la condition n'est pas remplie)
let i = 0;

while (i < 10) {
  // "tant que i est inférieur à 10"
  console.log("Fuck you Macron!");
  i++;
}

// for = Pour (configure la condition dans la parenthèse)
for (let x = 0; x < 10; x++) {
  console.log("CACA PROUT");
}

function ball() {
  let q = document.querySelector("#question").value;
  document.querySelector("#affiche").textContent = q;
}
