const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// initial load
checkBoxes();

function checkBoxes() {
  const triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTopHeight = box.getBoundingClientRect().top;

    if (boxTopHeight < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
