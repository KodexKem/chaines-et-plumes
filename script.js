const burgerBtn = document.getElementById("burgerBtn");
const menu = document.getElementById("siteMenu");

function setOpen(isOpen) {
  burgerBtn.classList.toggle("is-open", isOpen);
  menu.classList.toggle("is-open", isOpen);
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
  burgerBtn.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu",
  );
}

burgerBtn.addEventListener("click", () => {
  const isOpen = burgerBtn.classList.contains("is-open");
  setOpen(!isOpen);
});

menu.addEventListener("click", (e) => {
  if (e.target.matches("a")) setOpen(false);
});
