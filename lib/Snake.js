var Block = require('./Block');
var GamePiece = require('./GamePiece');

class Snake extends GamePiece {
  constructor(x,y, height, width, color, dx, dy) {
    super(x, y, height, width, color, dx, dy);
    this.body = [];
    this.tail = null;
    this.head = null;
    // this.direction = 'right';
  }

  createSnake() {
   for (var i = 0; i <= 4; i++) {
      var snakePiece = new Block (this.x + (i * 20 ), this.y, this.height, this.width, 'green'); 
      this.body.push(snakePiece);
    }
  }

  moveSnake(e) {
  let x;
  let y;
  this.tail = this.body.shift();
  this.head = this.body[this.body.length - 1];

  switch (e.keyCode) {
   case 37:
     // shift off tail 
     x = this.x - 20;
     y = this.y
     break;
   case 38:
     x = this.x;
     y = this.y - 20;
     break;
   case 39:
     x = this.x + 20;
     y = this.y;
     break;
   case 40:
     x = this.x;
     y = this.y + 20; 
   default: 
    return;        
   }
   //after this.body.push(this.tail);
  }  

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
}



module.exports = Snake;