const burgerBtn = document.getElementById("burgerBtn");
const menu = document.getElementById("siteMenu");

function setOpen(isOpen) {
  burgerBtn.classList.toggle("is-open", isOpen);
  menu.classList.toggle("is-open", isOpen);
  burgerBtn.setAttribute("aria-expanded", isOpen);
  burgerBtn.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu",
  );
}

burgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = burgerBtn.classList.contains("is-open");
  setOpen(!isOpen);
});

menu.addEventListener("click", (e) => {
  if (e.target.matches("a")) setOpen(false);
});

document.addEventListener("click", (e) => {
  if (
    burgerBtn.classList.contains("is-open") &&
    !burgerBtn.contains(e.target) &&
    !menu.contains(e.target)
  ) {
    setOpen(false);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && burgerBtn.classList.contains("is-open")) {
    setOpen(false);
  }
});
