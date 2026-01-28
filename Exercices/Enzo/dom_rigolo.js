const Trigger = document.querySelector("#trigger1");
const Trigger2 = document.querySelector("#trigger2");
const Victime = document.querySelector("#celia");
Trigger.addEventListener("click", () => {
  if (Victime.style.width < "1000px") {
    Victime.style.width = "1000px";
  } else {
    Victime.style.width = "50px";
  }
});

Trigger2.addEventListener("mouseover", () => {
  Victime.style.display = "block";
});
