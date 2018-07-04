var GamePiece = require('./GamePiece.js');

class Block extends GamePiece {
  constructor(x, y, height, width) {
    super(height, width);
  }
}

module.exports = Block;