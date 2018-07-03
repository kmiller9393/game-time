const Apple = require('./Apple');
const GamePiece = require('./GamePiece');
const Block = require('./Block');
const Snake = require('./Snake');

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const isGameOver = false;

var firstSnake = new Snake(420, 60, 20, 20);
var newApple = new Apple();
var newBlock = new Block('green');

window.onload = 
context.fillStyle = 'rgba(0, 0, 0, 1.0)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = '#f7f7f7';
context.font = '3.5rem Bangers';
drawEndGameText('Click Here To Start Game!', 0, canvas.height / 2, canvas.width);
context.font = '2rem Bangers';
context.fillText('Use Arrow Keys To Eat Apples While Avoiding Walls', 130, (canvas.height / 2) + 50);
context.font = '2rem Bangers';
context.fillText('Make Sure to Not Collide With Yourself', 190, (canvas.height / 2) + 100);
window.addEventListener('click', startGame);

function startGame() {
  firstSnake.createSnake();
  requestAnimationFrame(gameLoop);
}

function createNewGameScreen() {
  firstSnake.createSnake();
  location.reload();
};

window.addEventListener('keydown', takeKey);
window.addEventListener('keydown', (e) => {'key37'
 e.preventDefault();
 firstSnake.moveSnake(e);
});

var keys = {
  37: () => firstSnake.direction !== 'right' ? firstSnake.direction = 'left' : firstSnake.direction,
  38: () => firstSnake.direction !== 'down' ? firstSnake.direction = 'up' : firstSnake.direction,
  39: () => firstSnake.direction !== 'left' ? firstSnake.direction = 'right' : firstSnake.direction,
  40: () => firstSnake.direction !== 'up' ? firstSnake.direction = 'down' : firstSnake.direction
}

function takeKey(e) {
  if (keys[e.keyCode]) {
    keys[e.keyCode]()
  }
}

function drawAppleSnake() {
  newApple.draw(context);
  firstSnake.body.forEach((block, i) => {
  block.draw(context);
  })
}

function drawEndGameText(text, x, y, width) {
  let textDim = context.measureText(text);
  context.fillText(text, x + (width - textDim.width) / 2, y);
}

function gameLoop() {
  window.setTimeout(() => {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (firstSnake.isGameOver) {
    context.fillStyle = 'rgba(0, 0, 0, 1.0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#f7f7f7';
    context.font = '3.5rem Bangers';
    drawEndGameText("Click Here To Try Again!", 0, canvas.height/2, canvas.width);
    canvas.addEventListener('click', createNewGameScreen);
  } else {
    drawAppleSnake();
    firstSnake.moveSnake();
  }
  firstSnake.eatApple(newApple);
  firstSnake.collideIntoWall();
  firstSnake.collideIntoSelf();
  requestAnimationFrame(() => gameLoop());
  }, 70)
}  

