var Apple = require('./Apple.js');
var GamePiece = require('./GamePiece.js');
var Snake = require('./Snake.js');


var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

canvas.addEventListener('click', createApple);

function createApple() {
  var apple = new Apple((Math.floor((Math.random() * canvas.width) +1)), (Math.floor((Math.random() * canvas.height) +1)), 10, 10, 'rgb(200, 0, 0)');
  apple.draw(context);
}


// });

// canvas.addEventListener('keydown', firstSnake);