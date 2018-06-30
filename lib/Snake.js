var Block = require('./Block');
var GamePiece = require('./GamePiece');

class Snake extends GamePiece {
  constructor(x,y, height, width, color, dx, dy) {
    super(x, y, height, width, color, dx, dy);
    this.body = [];
    this.tail = null;
    this.head = null;
    this.direction = 'right';
  }

  createSnake() {
   for (var i = 0; i <= 4; i++) {
      var snakePiece = new GamePiece (this.x + (i * 20 ), this.y, this.height, this.width, 'green'); 
      this.body.push(snakePiece);
    }
  }

  moveSnake(e) {
  let x;
  let y;

  this.tail = this.body.shift();
  this.head = this.body[this.body.length - 1];

  switch (this.direction) {
   case 'left':
     this.tail.x = this.head.x - 20;
     this.tail.y = this.head.y;
     console.log('left');
     break;
   case 'up':
     this.tail.x = this.head.x;
     this.tail.y = this.head.y - 20;
     console.log('up');
     break;
   case 'right':
     this.tail.x = this.head.x + 20;
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

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
}



module.exports = Snake;