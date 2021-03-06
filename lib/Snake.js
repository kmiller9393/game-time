var GamePiece = require('./GamePiece');

class Snake extends GamePiece {
  constructor(x, y, height, width, color) {
    super(x, y, height, width, color);
    this.body = [];
    this.tail = null;
    this.head = null;
    this.direction = 'right';
    this.color = 'rgb (0, 200, 0)';
    this.score = 0;
    this.level = 0;
    this.isGameOver = false;
    this.createSnake();
  }

  createSnake() {
    for (var i = 0; i <= 4; i++) {
      var snakePiece = new GamePiece (this.x + (i * 20 ), 
        this.y, this.height, this.width, 'green'); 

      this.body.push(snakePiece);
    }
  }

  eatApple(apple) {
    if (this.head.x === apple.x && 
      this.head.y === apple.y) {
      apple.x = Math.floor(Math.random() * 40) * 20;
      apple.y = Math.floor(Math.random() * 24) * 20;
      this.score++;
      this.growSnake();
    }
  }  

  growSnake() {
    const gamepiece = new GamePiece(GamePiece.x, GamePiece.y, 20, 20, 'green');
    
    this.body.unshift(gamepiece);
  }

  moveSnake() {
    this.tail = this.body.shift();
    this.head = this.body[this.body.length - 1];

    switch (this.direction) {
    case 'right':
      this.tail.x = this.head.x + 20;
      this.tail.y = this.head.y;
      break;
    case 'up':
      this.tail.x = this.head.x;
      this.tail.y = this.head.y - 20;
      break;
    case 'left':
      this.tail.x = this.head.x - 20;
      this.tail.y = this.head.y;
      break;
    case 'down':
      this.tail.x = this.head.x;
      this.tail.y = this.head.y + 20; 
      break;
    default: 
      return;        
    }
    this.body.push(this.tail);
  }

  collideIntoSelf() {
    this.head = this.body[this.body.length - 1];
    for (let i = 0; i < this.body.length - 2; i++) {
      let bodyX = this.body[i].x;
      let bodyY = this.body[i].y;

      if (bodyX === this.head.x && bodyY === this.head.y) {
        this.isGameOver = true;
      }
    }
  }  

  collideIntoWall(width, height) {
    this.head = this.body[this.body.length - 1];
    if (
      this.head.x === width ||
      this.head.y === height ||
      (this.head.x + 20) === 0 || 
      (this.head.y + 20) === 0) {

      this.isGameOver = true;
    }
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
}

module.exports = Snake;