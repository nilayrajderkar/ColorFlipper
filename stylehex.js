const colours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let randomNumber = "#";
  for (let i = 0; i < 6; i++) {
    let nextNumber = generateRandomNumber();
    randomNumber += colours[nextNumber];
  }
  console.log(randomNumber);
  document.body.style.backgroundColor = randomNumber;
  document.getElementById("color").textContent = randomNumber;
});

generateRandomNumber = function () {
  return Math.floor(Math.random() * colours.length);
};
