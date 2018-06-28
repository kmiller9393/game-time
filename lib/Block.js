var GamePiece = require('./GamePiece.js');

class Block extends GamePiece {
  constructor (x, y, height = 20, width = 20, color, dx, dy) {
    super(x, y, height, width, color, dx, dy);
  }
}

  module.exports = Block;