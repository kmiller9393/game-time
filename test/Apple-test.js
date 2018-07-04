var assert = require('chai').assert;
var Block = require('../lib/Block.js');
var Apple = require('../lib/Apple.js');

describe('Apple', function() {
 it('should have properties', () => {
   let newApple = new Apple();

   let expectedObject = {
     x: newApple.x,
     y: newApple.y,
     height: 20,
     width: 20,
     color: 'rgb(250, 0, 0)',
   }

  assert.deepEqual(newApple.x, expectedObject.x);
  assert.deepEqual(newApple.y, expectedObject.y);
 })
})