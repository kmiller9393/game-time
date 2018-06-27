var GamePiece = require('./GamePiece.js');

class Apple extends GamePiece {
  constructor (x,y, height = 20, width = 20, color, dx, dy) {
    super(x, y, height, width, color, dx, dy);
  }

// createApple(ctx) {
//     const { 
//       x = (Math.floor((Math.random() * 35) +1)),
//       y = (Math.floor((Math.random() * 35) +1)),
//       height,
//       width,
//       color
//       } = this
//     console.log(this)
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, height, width);
//   }

}

module.exports = Apple;