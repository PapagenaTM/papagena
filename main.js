var background = document.querySelector(".container");

background.addEventListener("click", function() {
  changeBackground();
});

function changeBackground() {
  var red = getRandomNumber();
  var green = getRandomNumber();
  var blue = getRandomNumber();

  background.style.background = "rgb(" + red + "," + green + "," + blue + ")";
}

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}
