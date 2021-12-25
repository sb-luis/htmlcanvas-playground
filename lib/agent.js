// A simple random walker class dressed as a bubble
class Agent {
    constructor(x, y, r, mode = 'random') {
      this.pos = new Vector(x, y);
      this.dir = new Vector(x, y);
	  this.drawDir = false;
      this.radius = r;
      this.alpha = 0;
      this.speed = 3;
	  this.mode = mode;
	  this.color = '#000000';
	  this.target = new Vector(window.innerWidth * 0.5, window.innerHeight * 0.5);
    }

    randomDir() {
      this.dir.x = (Math.random() - 0.5) * 1.5;
      this.dir.y = (Math.random() - 0.5) * 1.5;
    }

	lookTowardsTarget(){
	  let newDir = Vector.sub(this.target, this.pos);
	  newDir = Vector.normalize(newDir);
	  this.dir.x = newDir.x;
	  this.dir.y = newDir.y;
	}

    move() {
      this.pos.x += this.dir.x * this.speed;
      this.pos.y += this.dir.y * this.speed;
    }

	drawDirection(){
	  ctx.beginPath();
	  ctx.moveTo(this.pos.x, this.pos.y);
	  ctx.lineTo(this.pos.x + this.dir.x * this.speed , this.pos.y + this.dir.y * this.speed);
	  ctx.stroke();
	}

    display() {
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false); // x, y, radius, startAngle (radians), endAngle (radians), drawCounterClockwise?
      //ctx.stroke();
      ctx.fill();
	  if(this.drawDir) this.drawDirection();
    }

    update() {
	  //Update Agent Direction
	  switch(this.mode){
		case "random":
			this.randomDir();
			break;
		case "chase":
	  		this.lookTowardsTarget();
			break;
		default:
			console.log('invalid agent mode')
			this.randomDir();
	  }
	  //Move agent
	  this.move();
	  //Draw agent
      this.display();
    }
  }

