var Block = require('./Block.js');

class Snake {
  constructor(context) {
    this.body = [];
    this.direction = 'right';
  }

  createSnake(x,y) {
    for (var i = 0; i<=4; i++) {
    var block = new Block(x + 20, 50); 
    this.body.push(block);
    }
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }
}



module.exports = Snake;