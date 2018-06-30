const Apple = require('./Apple');
const GamePiece = require('./GamePiece');
const Block = require('./Block');
const Snake = require('./Snake');

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const isGameOver = false;

const firstSnake = new Snake(420, 50, 20, 20, 'rgb(0, 200, 0)', 1, 0);
const newApple = new Apple((Math.floor((Math.random() * (canvas.width - 20)) +1)), (Math.floor((Math.random() * (canvas.height - 20)) +1)), 20, 20, 'rgb(200, 100, 0)');

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