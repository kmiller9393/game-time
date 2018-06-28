var Apple = require('./Apple.js');
var GamePiece = require('./GamePiece.js');
var Snake = require('./Snake.js');

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var isGameOver = false;

var firstSnake = new Snake(425, 50, 10, 10, 'rgb(0, 200, 0)', 1, 0);
var newApple = new Apple((Math.floor((Math.random() * (canvas.width - 20)) +1)), (Math.floor((Math.random() * (canvas.height - 20)) +1)), 10, 10, 'rgb(200, 100, 0)');

var snakes = [
  firstSnake
];

var apples = [
  newApple
];

// canvas.addEventListener('click', createApple);
window.addEventListener('keydown', moveSnake);

// function createApple() {
//   console.log('Apple!!');
//   var newApple = new Apple((Math.floor((Math.random() * (canvas.width - 20)) +1)), (Math.floor((Math.random() * (canvas.height - 20)) +1)), 10, 10, 'rgb(200, 100, 0)');

//   newApple.draw(context);  
// }


function moveSnake(e) {
   switch (e.keyCode) {
    case 37: 
      firstSnake.dx = -1;
      firstSnake.dy = 0;
      break;
    case 38:
      firstSnake.dx = 0;
      firstSnake.dy = -1;
      break;
    case 39:
      firstSnake.dx = 1;
      firstSnake.dy = 0;
      break;
    case 40:
      firstSnake.dx = 0;
      firstSnake.dy = 1;
      break;      
  }
}

function animate() {
  apples.forEach( (apple, i) => {
    newApple.draw(context);
  })
  snakes.forEach( (snake, i) => {
    snake.draw(context);
    snake.move();
  });
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (isGameOver) {
    // do some end game stuff
  } else {
    animate();
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);