class Apple {
  constructor (x,y, height = 20, width = 20, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

createApple(ctx) {
    const { 
      x = (Math.floor((Math.random() * 350) +1)),
      y = (Math.floor((Math.random() * 350) +1)),
      height,
      width,
      color
      } = this
console.log(this)
    ctx.fillStyle = color;
    ctx.fillRect(x, y, height, width);
  }



}


