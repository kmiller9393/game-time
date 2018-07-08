const { assert } = require('chai');
const Snake = require('../lib/Snake.js');
const Apple = require('../lib/Apple.js')

describe('Snake', function() {

it('should instantiate a new snake with 5 body parts', function() {
 let snake = new Snake();
 
 assert.equal(snake.body.length, 5);
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

 newSnake.tail = newSnake.body[0]
 newSnake.head = newSnake.body[newSnake.body.length - 1];

 newSnake.moveSnake();
 newSnake.direction = 'right';

 assert.equal(newSnake.head.x, 80);
 assert.equal(newSnake.tail.x, 100);
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

it.only('should die when collides into wall', function() {
  const newSnake = new Snake(0, 0);
  newSnake.createSnake();
  newSnake.moveSnake();
  newSnake.direction = 'up';
  newSnake.collideIntoWall();
  newSnake.head.y === 500;
  assert.equal(newSnake.isGameOver, true);
 
  })
})