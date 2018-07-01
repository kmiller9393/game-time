var GamePiece = require('./GamePiece.js');

class Block extends GamePiece {
  constructor (height, width, color) {
    super(height, width)
    this.color = 'rgb(0, 200, 0)';
  }
}

  module.exports = Block;