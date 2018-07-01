class GamePiece {
  constructor(x, y, height, width, color, dx = 1, dy = 0) {
    this.x = x;
    this.y = y;
    this.height = 20;
    this.width = 20;
    this.color = color;
    this.dx = dx;   // direction: 1 === right, 0 === stop, -1 === left
    this.dy = dy; // direction: 1 === right, 0 === stop, -1 === left
    // this.dyv = 1 // velocity / speed 
    this.score = 1;
  }

  isCollidingWith(object) {
    return !(
      this.x + this.width < object.x ||
      this.y + this.height < object.y ||
      this.x > object.x + object.width || 
      this.y > object.y + object.height
    );
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }

  //   move() {
  //   this.x += this.dx * this.dxv;
  //   this.y += this.dy * this.dxv;
  // };

  createFirstSnake(context, event) {
    this.snake.createSnake().draw(context)
  }
}


module.exports = GamePiece;