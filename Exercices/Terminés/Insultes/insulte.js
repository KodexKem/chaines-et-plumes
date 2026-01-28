const insultes = [
  "P'tite Bite",
  "Avaleuse de Chibre",
  "Serpent Minute",
  "Pause Caca",
  "Hijo de Puta",
  "Tête de cul",
];

document
  .getElementById("btnInsulte")
  .addEventListener("click", afficherInsulte);

function afficherInsulte() {
  const index = Math.floor(Math.random() * insultes.length);
  const insulteChoisie = insultes[index];
  document.getElementById("insulte").textContent = insulteChoisie;
}

document.getElementById("btnAjoute").addEventListener("click", () => {
  insultes.push(document.querySelector("#ajouterInsulte").value);
});
