const trigger = document.querySelector("#trigger1");
trigger.addEventListener("mouseover", () => {
  aleatoire_x = Math.floor(Math.random() * 100);
  aleatoire_y = Math.floor(Math.random() * 100);
  trigger.style.top = aleatoire_y + "%";
  trigger.style.left = aleatoire_x + "%";
});
