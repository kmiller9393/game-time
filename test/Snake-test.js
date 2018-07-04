const { assert } = require('chai');
const Snake = require('../lib/Snake.js');
const Apple = require('../lib/Apple.js')

describe('Snake', function() {

it('should instantiate a new snake with 5 body parts', function() {
 let snake = new Snake()
 snake.createSnake();
 assert.deepEqual(snake.body.length, 5)
})

it('should be able grow when eats apple', function() {
  const newSnake = new Snake(0, 0);
  const apple = new Apple();
  apple.x = 80;
  apple.y = 0;

  newSnake.createSnake();
  let snakeLength = newSnake.body.length;
  newSnake.moveSnake();
  newSnake.eatApple(apple);

  assert.equal(newSnake.score, 1);
  assert.deepEqual(newSnake.body.length, snakeLength +1);
})

it('should be able to move', function() {
 const newSnake = new Snake(0, 0);
 newSnake.createSnake();
 newSnake.tail = newSnake.body.shift();
 newSnake.head = newSnake.body[newSnake.body.length - 1];

 assert.deepEqual(newSnake.head.x, 80);
})

it('should die when it collides into itself', function() {
  const newSnake = new Snake(0, 0);
  newSnake.createSnake();
  newSnake.moveSnake();
  newSnake.direction = 'up';
  newSnake.moveSnake();
  newSnake.direction = 'left';
  newSnake.moveSnake();
  newSnake.direction = 'down';
  newSnake.moveSnake();
  newSnake.direction = 'right';
  newSnake.collideIntoSelf();
  newSnake.head.x === newSnake.body[0].x;
  assert.equal(newSnake.isGameOver, true);
  })

it.skip('should die when collides into wall', function(){
  const newSnake = new Snake(0, 0);
  newSnake.createSnake();
  newSnake.head = newSnake.body[this.body.length - 1];

 
  newSnake  })
})