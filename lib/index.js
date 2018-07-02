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
const newBlock = new Block('rgb(0, 200, 0)');

firstSnake.createSnake();


// canvas.addEventListener('click', createApple);
window.addEventListener('keydown', takeKey);
window.addEventListener('keydown', (e) => {
 firstSnake.moveSnake(e);
});


var keys = {
  37: () => firstSnake.direction = 'left',
  38: () => firstSnake.direction = 'up',
  39: () => firstSnake.direction = 'right',
  40: () => firstSnake.direction = 'down'
};



// function createApple() {
//   console.log('Apple!!');
//   var newApple = new Apple((Math.floor((Math.random() * (canvas.width - 20)) +1)), (Math.floor((Math.random() * (canvas.height - 20)) +1)), 10, 10, 'rgb(200, 100, 0)');

//   newApple.draw(context);  
// }

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
  const gamepiece = new GamePiece(GamePiece.x, GamePiece.y, 20, 20, 'rgb(0, 200, 0)');
  gamepiece.firstSnake = new GamePiece(GamePiece.x, GamePiece.y, 20, 20, 'rgb(0, 200, 0');
  firstSnake.body.unshift(gamepiece.firstSnake);
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
  // firstSnake.collideIntoSelf();
  eatApple();
  firstSnake.collideIntoWall();
  requestAnimationFrame(() => gameLoop());
  }, 60)
}  
requestAnimationFrame(gameLoop);

