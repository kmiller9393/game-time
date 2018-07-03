var assert = require('chai').assert;
var Block = require('../lib/Block.js');

describe('Block', function() {
 it('should instantiate a new Block', function () {
   let blocky = new Block(50, 50, 20, 20, 'green');
   assert.isObject(blocky);
   });

 it('should have a height', function() {
   let blocky = new Block(20);
   assert.deepEqual(blocky.height, 20)
 })
});