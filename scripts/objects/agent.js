// A simple random walker class dressed as a bubble
class Agent {
    constructor(x, y, r) {
      this.pos = new Vector(x, y);
      this.radius = r;
      this.alpha = 0;
      this.speed = 5;
    }
  
    move() {
      this.pos.x += (Math.random() - .5) * this.speed;
      this.pos.y += (Math.random() - .5) * this.speed;
    }
  
    display() {
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false); // x, y, radius, startAngle (radians), endAngle (radians), drawCounterClockwise?
      //ctx.stroke();
      ctx.fill();
    }
  
    update() {
      this.move();
      this.display();
    }
  
    interact(target, treshold) {
      let d = Vector.sub(this.pos, target).length;
  
      if (d < treshold) {
        if (this.alpha < 1) {
          this.alpha += 0.1;
        }
      } else {
        if (this.alpha >= 0) {
          this.alpha -= 0.01;
        } else {
          this.alpha = 0;
        }
      }
    }
  }
  