const button = document.querySelectorAll(".button");
const iFrame = document.querySelector(".containerTwo");
const form = document.querySelector(".container");

function selectItem(e) {
  removeBorder();
  e.target.classList.toggle("buttonclick");
  iFrame.classList.toggle("hidden");
  form.classList.toggle("hidden");
}

function removeBorder() {
  button.forEach((item) => {
    item.classList.remove("buttonclick");
  });
}

button.forEach((item) => {
  item.addEventListener("click", selectItem);
});
