var assert = require('chai').assert;
var Apple = require('../lib/Apple.js');

describe('Apple', function() {
  it.skip('should have a random x coordinate', function(){
    let newApple = new Apple()
    assert.equal(newApple.x, 20)
  })
})