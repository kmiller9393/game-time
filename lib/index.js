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

firstSnake.createSnake();

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

function drawCenterText(text, x, y, width) {
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
    drawCenterText("Click To Start!", 0, canvas.height/2, canvas.width);
     canvas.addEventListener('click', function() {
      firstSnake.isGamOver = false;
      location.reload();
    });
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
requestAnimationFrame(gameLoop);

