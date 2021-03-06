var GamePiece = require('./GamePiece.js');

class Apple extends GamePiece {
  constructor (x, y, height, width) {
    super(height, width);
    this.x = Math.floor(Math.random() * 40) * 20;
    this.y = Math.floor(Math.random() * 24) * 20;
    this.color = 'rgb(200, 0, 0)';
  }
}

module.exports = Apple;