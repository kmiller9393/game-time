var Block = require('./Block.js');
var GamePiece = require('./GamePiece.js');

class Snake extends GamePiece {
  constructor(x,y, height, width, color, dx, dy) {
    super(x, y, height, width, color, dx, dy);
    this.body = [];
    // this.direction = 'right';
  }

  createSnake() {
   for (var i = 0; i <= 4; i++) {
      var snakePiece = new Block(this.x - (i * 20), this.y, this.height, this.width, 'green'); 
      this.body.push(snakePiece);
    }
  }

  moveSnake(e) {
  switch (e.keyCode) {
   case 37:
     this.body[0].dx = -1;
     this.body[0].dy = 0;
     break;
   case 38:
     this.body[0].dx = 0;
     this.body[0].dy = -1;
     break;
   case 39:
     this.body[0].dx = 1;
     this.body[0].dy = 0;
     break;
   case 40:
     this.body[0].dx = 0;
     this.body[0].dy = 1;
     break;
   default: 
    return;        
   }
  }  

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
}



module.exports = Snake;