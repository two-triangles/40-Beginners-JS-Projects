const colorChangeButton = document.getElementById("color_button");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const container = document.getElementsByClassName("container");
const hexCode = document.getElementsByClassName("hex_code");

colorChangeButton.addEventListener("click", () => {
  let hexColor = ["#"];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 16);
    hexColor.push(hex[randomNumber]);
  }
  container[0].style.backgroundColor = hexColor.join("");
  hexCode[0].innerText = hexColor.join("");
  hexCode[0].style.color = hexColor.join("");
});
