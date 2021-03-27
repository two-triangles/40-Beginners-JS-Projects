const incrementNumber = document.getElementById("increment_num");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

increaseButton.addEventListener("click", (event) => {
  incrementNumber.innerText++;
});

resetButton.addEventListener("click", (event) => {
  incrementNumber.innerText = 0;
});

decreaseButton.addEventListener("click", (event) => {
  if (incrementNumber.innerText === "0") {
    event.preventDefault();
  } else {
    incrementNumber.innerText--;
  }
});
