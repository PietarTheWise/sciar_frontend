const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navBar");
const navItem = document.querySelectorAll(".nav-item");

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("change");
});

navItem.forEach((e) =>
  e.addEventListener("click", () => {
    navBar.classList.toggle("change");
  })
);

// text carousel down below!!!!!!!!!!!!!!!!!!!!!!!!!!!
// text carousel down below!!!!!!!!!!!!!!!!!!!!!!!!!!!
// text carousel down below!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Teampage code
const teampageImage = document.querySelectorAll(".card");
const layer = document.querySelector(".layer");
const testimonials = document.querySelector(".testimonials");


teampageImage.forEach((e) =>
  e.addEventListener("click", (e) => {
    e.target.classList.toggle("up");
    console.log("Yeeeee");
  })
);
