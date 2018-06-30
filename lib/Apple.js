var GamePiece = require('./GamePiece.js');

class Apple extends GamePiece {
  constructor (x, y, height, width, color, dx, dy) {
    super(x, y, height, width, color);
  }
}

module.exports = Apple;