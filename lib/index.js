var Apple = require('./Apple.js');
var Gameboard = require('./Gameboard.js');
var Snake = require('./Snake.js');


var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');

canvas.addEventListener('click', Apple.createApple)
//   var apple = new Apple(event.offsetX, event.offsetY, 10, 10, 'rgb(0, 0, 200)');
//   blocks.push(block);
// });

// canvas.addEventListener('keydown', firstSnake);