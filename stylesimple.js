const colours = ["Red", "Green", "Blue", "Yellow", "Orange"];

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  console.log("Clicked");
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colours[randomNumber];
  document.getElementById("color").textContent = colours[randomNumber];
});

generateRandomNumber = function () {
  return Math.floor(Math.random() * colours.length);
};
