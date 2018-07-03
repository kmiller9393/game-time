const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js');

describe('GamePiece', function() {

 it('should have properties', function() {
   const gamePiece = new GamePiece(50, 50, 20, 20, 'rgb(250, 0, 0)', 1);
   const expectedObject = {
     x: 50,
     y: 50,
     height: 20,
     width: 20,
     color: 'rgb(250, 0, 0)',
   
   }
   assert.deepEqual(gamePiece, expectedObject);
 })