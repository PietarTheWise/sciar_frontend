let sliderContents = document.querySelectorAll(".slidetext"),
  arrowLeft = document.querySelector("#buttonleft"),
  arrowRight = document.querySelector("#buttonright"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderContents.length; i++) {
    sliderContents[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderContents[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderContents[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderContents[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderContents.length;
  }
  arrowLeft.currentTime = 0;

  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderContents.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
