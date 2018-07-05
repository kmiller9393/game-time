const Apple = require('./Apple');
const Snake = require('./Snake');
const canvas = document.querySelector('#game');
const context = canvas.getContext('2d');
const increaseDiffButton = document.querySelector('.increase-difficulty');

let rate = 90;

let firstSnake = new Snake(420, 60, 20, 20);
let newApple = new Apple();

var keys = {
  37: () => {
    if (firstSnake.direction !== 'right') {
      firstSnake.direction = 'left'; 
    } 
  },
  38: () => {
    if (firstSnake.direction !== 'down') {
      firstSnake.direction = 'up';
    }
  },   
  39: () => {
    if (firstSnake.direction !== 'left') { 
      firstSnake.direction = 'right';
    }
  },  
  40: () => {
    if (firstSnake.direction !== 'up') { 
      firstSnake.direction = 'down'; 
    }
  }  
};

context.fillStyle = 'rgba(0, 0, 0, 1.0)';
context.fillRect(0, 0, canvas.width, canvas.height);
context.fillStyle = '#f7f7f7';
context.font = '3.5rem Bangers';
drawEndGameText(
  'Click Here To Start Game!', 
  0, 
  (canvas.height / 2), 
  canvas.width
);
context.font = '2rem Bangers';
var title = 'Set Level With Increase Difficulty Button Before Starting';
context.fillText(title, 100, (canvas.height / 2) + 110);

document.querySelector('.score').innerText = firstSnake.score;
document.querySelector('.level').innerText = firstSnake.level;
canvas.addEventListener('click', startGame);

increaseDiffButton.addEventListener('click', increaseDifficulty);
window.addEventListener('keydown', evalInput);
window.addEventListener('keydown', (e) => {
  'key37';
  e.preventDefault();
  firstSnake.moveSnake();
});

function startGame() {
  requestAnimationFrame(setTimeoutRate);
}

function createNewGameScreen() {
  firstSnake.createSnake();
  location.reload();
}

function evalInput(e) {
  if (keys[e.keyCode]) {
    keys[e.keyCode]();
  }
}

function drawAppleSnake() {
  newApple.draw(context);
  firstSnake.body.forEach((block) => {
    block.draw(context);
  });
}

function drawEndGameText(text, x, y, width) {
  let textDim = context.measureText(text);

  context.fillText(text, x + (width - textDim.width) / 2, y);
}

function setTimeoutRate() {
  setTimeout(gameLoop, rate);
}

function increaseDifficulty() {
  if (rate <= 30) {
    return;
  } else {
    rate -= 15;
    firstSnake.level++;
  }
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height); 

  if (firstSnake.isGameOver) {
    context.fillStyle = 'rgba(0, 0, 0, 1.0)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#f7f7f7';
    context.font = '3.5rem Bangers';
    drawEndGameText("Click Here To Try Again!", 0, 
      canvas.height / 2, canvas.width);
    canvas.addEventListener('click', createNewGameScreen);
  } else {
    drawAppleSnake();
    firstSnake.moveSnake();
  }
  firstSnake.eatApple(newApple);
  document.querySelector('.score').innerText = firstSnake.score;
  document.querySelector('.level').innerText = firstSnake.level;
  firstSnake.collideIntoWall(canvas.width, canvas.height);
  firstSnake.collideIntoSelf();
  requestAnimationFrame(() => setTimeoutRate());
}  

