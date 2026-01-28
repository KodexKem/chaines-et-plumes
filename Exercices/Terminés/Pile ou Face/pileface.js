let number = 0;
function compteur() {
  number++;
  console.log(number);
}

let piece = 0;

function PileFace() {
  piece = Math.floor(Math.random() * 2);
  if (piece == 0) {
    console.log("Pile");
    document.querySelector("#resultat").textContent = "Pile";
  } else {
    console.log("Face");
    document.querySelector("#resultat").textContent = "Face";
  }
}
