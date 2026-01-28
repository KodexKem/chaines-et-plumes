function ball() {
  let q = document.querySelector("#question").value;

  let aleatoire = Math.floor(Math.random() * 22);

  switch (aleatoire) {
    case 0:
      document.querySelector("#affiche").textContent = "D'après moi, oui";
      break;

    case 1:
      document.querySelector("#affiche").textContent = "Essaye plus tard";
      break;

    case 2:
      document.querySelector("#affiche").textContent = "Essaye encore";
      break;

    case 3:
      document.querySelector("#affiche").textContent = "Pas d'avis";
      break;

    case 4:
      document.querySelector("#affiche").textContent = "C'est ton destin";
      break;

    case 5:
      document.querySelector("#affiche").textContent = "Le sort en est jeté";
      break;

    case 6:
      document.querySelector("#affiche").textContent = "Une chance sur deux";
      break;

    case 7:
      document.querySelector("#affiche").textContent = "\ud83d\udca9";
      break;

    case 8:
      document.querySelector("#affiche").textContent = "Reposes ta question";
      break;

    case 9:
      document.querySelector("#affiche").textContent = "C'est certain";
      break;

    case 10:
      document.querySelector("#affiche").textContent = "Oui absolument";
      break;

    case 11:
      document.querySelector("#affiche").textContent = "Tu peux compter dessus";
      break;

    case 12:
      document.querySelector("#affiche").textContent = "Sans aucun doute";
      break;

    case 13:
      document.querySelector("#affiche").textContent = "Très probable";
      break;

    case 14:
      document.querySelector("#affiche").textContent = "Oui";
      break;

    case 15:
      document.querySelector("#affiche").textContent = "C'est bien parti";
      break;

    case 16:
      document.querySelector("#affiche").textContent = "C'est non";
      break;

    case 17:
      document.querySelector("#affiche").textContent = "Peu probable";
      break;

    case 18:
      document.querySelector("#affiche").textContent = "Faut pas rêver";
      break;

    case 19:
      document.querySelector("#affiche").textContent = "N'y compte pas";
      break;

    case 20:
      document.querySelector("#affiche").textContent = "Impossible";
      break;

    case 21:
      document.querySelector("#affiche").textContent = "HO TA GUEULE !";
      break;
  }
}
