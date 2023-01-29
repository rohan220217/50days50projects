const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentIndex = 1;

next.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex > circles.length) {
    currentIndex = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 1) {
    currentIndex = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, circleInd) => {
    if (circleInd < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");

  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentIndex === 1) {
    prev.disabled = true;
  } else if (currentIndex === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
