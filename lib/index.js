const Apple = require('./Apple');
const GamePiece = require('./GamePiece');
const Block = require('./Block');
const Snake = require('./Snake');

const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const isGameOver = false;

const scorePlacement= document.querySelector('.score')

const firstSnake = new Snake(420, 60, 20, 20);
const newApple = new Apple();
const newBlock = new Block('green');

firstSnake.createSnake();

window.addEventListener('keydown', takeKey);
window.addEventListener('keydown', (e) => {
 e.preventDefault();
 firstSnake.moveSnake(e);
});

var keys = {
  37: () => firstSnake.direction !== 'right' ? firstSnake.direction = 'left' : firstSnake.direction,
  38: () => firstSnake.direction !== 'down' ? firstSnake.direction = 'up' : firstSnake.direction,
  39: () => firstSnake.direction !== 'left' ? firstSnake.direction = 'right' : firstSnake.direction,
  40: () => firstSnake.direction !== 'up' ? firstSnake.direction = 'down' : firstSnake.direction
};

function takeKey(e) {
  if (keys[e.keyCode]) {
    keys[e.keyCode]()
  }
}

function drawAppleSnake() {{
    newApple.draw(context);
  }

  firstSnake.body.forEach((block, i) => {
    block.draw(context);
  })
}

function eatApple(block) {
  if (firstSnake.head.x === newApple.x && 
    firstSnake.head.y === newApple.y) {
    newApple.x = Math.floor(Math.random() * 40) * 20;
    newApple.y = Math.floor(Math.random() * 24) * 20;
    increaseScore();
    growSnake();
  }
}

function growSnake() {
  const gamepiece = new GamePiece(GamePiece.x, GamePiece.y, 20, 20, 'green');
  firstSnake.body.unshift(gamepiece);
}

function increaseScore() {
  var scoreNumber = firstSnake.score++;
  scorePlacement.innerText = scoreNumber;
}

function gameLoop() {
  window.setTimeout(() => {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (isGameOver) {
    // do some end game stuff
  } else {
    drawAppleSnake();
    firstSnake.moveSnake();
  }
  eatApple();
  firstSnake.collideIntoWall();
  firstSnake.collideIntoSelf();
  requestAnimationFrame(() => gameLoop());
  }, 60)
}  
requestAnimationFrame(gameLoop);

