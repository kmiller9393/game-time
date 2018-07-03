const { assert } = require('chai');
const Snake = require('../lib/Snake.js');

describe('Snake', function() {

it('should be able to collide with apple', function() {
   const newSnake = new Snake(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
   const newApple = new GamePiece(58, 58, 10, 10, 'rgb(250, 0, 0)', 1);

   const isColliding = gamePiece1.isCollidingWith(gamePiece2);

   assert.isTrue(isColliding);
 })

 it.skip('should not collide with objects when they dont overlap', function() {
   const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
   const gamePiece2 = new GamePiece(65, 65, 10, 10, 'rgb(250, 0, 0)', 1);

   const isColliding = gamePiece1.isCollidingWith(gamePiece2);

   assert.isFalse(isColliding);
 })
 
 it.skip('should move', function() {
   const gamePiece1 = new GamePiece(50, 50, 10, 10, 'rgb(250, 0, 0)', 1);
   
   gamePiece1.move();

   assert.equal(gamePiece1.x, 50.5);
 })
})