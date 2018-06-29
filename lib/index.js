var Apple = require('./Apple.js');
var GamePiece = require('./GamePiece.js');
var Block = require('./Block.js');
var Snake = require('./Snake.js');

var canvas = document.querySelector('#game');
var context = canvas.getContext('2d');
var isGameOver = false;

var firstSnake = new Snake(425, 50, 20, 20, 'rgb(0, 200, 0)', 1, 0);
var newApple = new Apple((Math.floor((Math.random() * (canvas.width - 20)) +1)), (Math.floor((Math.random() * (canvas.height - 20)) +1)), 10, 10, 'rgb(200, 100, 0)');

firstSnake.createSnake();

// var snakes = [
//   firstSnake
// ];

var apples = [
  newApple
];

// canvas.addEventListener('click', createApple);
window.addEventListener('keydown', (e) => {
 firstSnake.moveSnake(e);
});

// function createApple() {
//   console.log('Apple!!');
//   var newApple = new Apple((Math.floor((Math.random() * (canvas.width - 20)) +1)), (Math.floor((Math.random() * (canvas.height - 20)) +1)), 10, 10, 'rgb(200, 100, 0)');

//   newApple.draw(context);  
// }

function animate() {
  apples.forEach( (apple, i) => {
    newApple.draw(context);
  })
  // snakes.forEach( (snake, i) => {
    firstSnake.body.forEach((block, i) => {
      block.draw(context);
      block.move();
    })
    // firstSnake.draw(context);
    // firstSnake.move();
  // });
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