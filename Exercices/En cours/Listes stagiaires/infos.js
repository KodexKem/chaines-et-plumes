let formateur = {
  prenom: "Enzo",
  age: 27,
  sexe: "M",
  filmprefere: "Matrix",
  platfavori: "Hachis parmentier",
  animaltotem: "Panda",
};

console.log(formateur);
console.log(formateur.platfavori);

let stagiaire1 = {
  prenom: "Mathias",
  age: 51,
  sexe: "M",
  filmprefere: "Le Dernier Samouraï",
  platfavori: "Jarret au Munster",
  animaltotem: "Caméléon",
};

let stagiaire2 = {
  prenom: "Thomas",
  age: 25,
  sexe: "M",
  filmprefere: "????????",
  platfavori: "????????",
  animaltotem: "??????",
};

let stagiaire3 = {
  prenom: "Jérémie",
  age: 42,
  sexe: "M",
  filmprefere: "Full Metal Jacket",
  platfavori: "Tartare de boeuf",
  animaltotem: "Loup",
};

let stagiaire4 = {
  prenom: "Célia",
  age: "24",
  sexe: "F",
  filmprefere: "Anastasia",
  platfavori: "Tlitli",
  animaltotem: "Fourmi",
};

let stagiaire5 = {
  prenom: "Laura",
  age: "#",
  sexe: "F",
  filmprefere: "????????",
  platfavori: "????????",
  animaltotem: "??????",
};

let stagiaire6 = {
  prenom: "Lukas",
  age: "#",
  sexe: "M",
  filmprefere: "????????",
  platfavori: "????????",
  animaltotem: "??????",
};

let stagiaire7 = {
  prenom: "Julien",
  age: "#",
  sexe: "M",
  filmprefere: "????????",
  platfavori: "????????",
  animaltotem: "??????",
};
let stagiaire8 = {
  prenom: "Rowan",
  age: "#",
  sexe: "M",
  filmprefere: "????????",
  platfavori: "????????",
  animaltotem: "??????",
};

let leprof = [formateur];

let participants = [
  stagiaire1,
  stagiaire2,
  stagiaire3,
  stagiaire4,
  stagiaire5,
  stagiaire6,
  stagiaire7,
  stagiaire8,
];

const carte = document.querySelector("div");

leprof.forEach((formateur) => {
  let carteFormateur = document.createElement("div");
  carteFormateur.classList.add("carte-formateur");

  let pPrenom = document.createElement("p");
  pPrenom.textContent = "Prénom : " + formateur.prenom;
  carteFormateur.appendChild(pPrenom);

  let pAge = document.createElement("p");
  pAge.textContent = "Âge : " + formateur.age;
  carteFormateur.appendChild(pAge);

  let pSexe = document.createElement("p");
  pSexe.textContent = "Sexe : " + formateur.sexe;
  carteFormateur.appendChild(pSexe);

  let pFilm = document.createElement("p");
  pFilm.textContent = "Film préféré : " + formateur.filmprefere;
  carteFormateur.appendChild(pFilm);

  let pPlat = document.createElement("p");
  pPlat.textContent = "Plat favori : " + formateur.platfavori;
  carteFormateur.appendChild(pPlat);

  let pAnimal = document.createElement("p");
  pAnimal.textContent = "Animal totem : " + formateur.animaltotem;
  carteFormateur.appendChild(pAnimal);

  carte.appendChild(carteFormateur);
});

participants.forEach((stagiaire) => {
  let carteStagiaire = document.createElement("div");
  carteStagiaire.classList.add("carte-stagiaire");

  let pPrenom = document.createElement("p");
  pPrenom.textContent = "Prénom : " + stagiaire.prenom;
  carteStagiaire.appendChild(pPrenom);

  let pAge = document.createElement("p");
  pAge.textContent = "Âge : " + stagiaire.age;
  carteStagiaire.appendChild(pAge);

  let pSexe = document.createElement("p");
  pSexe.textContent = "Sexe : " + stagiaire.sexe;
  carteStagiaire.appendChild(pSexe);

  let pFilm = document.createElement("p");
  pFilm.textContent = "Film préféré : " + stagiaire.filmprefere;
  carteStagiaire.appendChild(pFilm);

  let pPlat = document.createElement("p");
  pPlat.textContent = "Plat favori : " + stagiaire.platfavori;
  carteStagiaire.appendChild(pPlat);

  let pAnimal = document.createElement("p");
  pAnimal.textContent = "Animal totem : " + stagiaire.animaltotem;
  carteStagiaire.appendChild(pAnimal);

  carte.appendChild(carteStagiaire);
});
