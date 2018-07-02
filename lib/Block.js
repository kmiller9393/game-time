var GamePiece = require('./GamePiece.js');

class Block extends GamePiece {
  constructor(height, width, x, y, color) {
    super(height, width);
  }
}

module.exports = Block;