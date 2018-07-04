var GamePiece = require('./GamePiece.js');

class Block extends GamePiece {
  constructor(x, y, height, width, color) {
    super(height, width);
  }
}

module.exports = Block;