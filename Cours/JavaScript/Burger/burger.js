const burger_trigger = document.querySelector("#burger_trigger");
const menu = document.querySelector("#menu");

burger_trigger.addEventListener("click", () => {
  menu.classList.toggle("burger_on");
});
