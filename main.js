var background = document.querySelector('.container');

// background.addEventListener("click", function() {
//   changeBackground();
// });

function changeBackground() {
  var red = getRandomNumber();
  var green = getRandomNumber();
  var blue = getRandomNumber();

  background.style.background = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log(
        'ServiceWorker registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}
