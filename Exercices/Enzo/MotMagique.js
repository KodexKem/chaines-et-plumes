// Ce script est suffisant pour faire pop UNE video !

let LeBoutonMagique = document.querySelector("input");

LeBoutonMagique.addEventListener("click", function () {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let Poppers = document.createElement("div");
    let LaVideo = document.createElement("video");
    LaVideo.setAttribute(
      "src",
      "Jurassic_Park_Vous_navez_pas_dit_le_mot_magique__VF.mp4"
    );
    Poppers.style.right = x + "%";
    Poppers.style.top = y + "%";
    document.body.appendChild(Poppers);
    Poppers.appendChild(LaVideo);
    let Autoplay = document.querySelectorAll("video");
    Autoplay.forEach((video) => {
      video.play();
    });
  }
});
