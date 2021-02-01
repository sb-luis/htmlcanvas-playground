let mouse = new Vector(innerWidth * 0.5, innerHeight * 0.5);

let mouseHeld = false;

let maxAgents = 500;
let n = 50;
var agents = [];

function spawnAgent(){
  if(agents.length < maxAgents){
    let agent = new Agent(mouse.x, mouse.y, 1);
    agents.push(agent);
  }
}

// --- MAIN FUNCTIONS ---
function start() {
  agents = [];
  ctx.clearRect(0, 0, innerWidth, innerHeight); //Clear the entire canvas.
}

function update() {
  for (var i = 0; i < agents.length; i++) {
    agents[i].update();
  }
}

// --- MOUSE EVENT LISTENERS ---
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;

  if(mouseHeld){
    spawnAgent();
  }
})

window.addEventListener("mousedown", function(event) {
  mouseHeld = true;
})

window.addEventListener("mouseup", function(event) {
  mouseHeld = false;
})

// --- TOUCH EVENT LISTENERS ---
window.addEventListener("touchmove", function(event) {
  mouse.x = event.targetTouches[0].pageX;
  mouse.y = event.targetTouches[0].pageY;

  if(mouseHeld){
    spawnAgent();
  }
})

window.addEventListener("touchstart", function(event) {
  mouseHeld = true;
})

window.addEventListener("touchend", function(event) {
  mouseHeld = false;
})

// --- EVENT LISTENERS ---
window.addEventListener("resize", function(event) {
  setup();
})

// --- CANVAS MAIN FUNCTIONS ---
function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  requestAnimationFrame(draw);
  update();
}

// --- CANVAS EXECUTION ---
setup();
draw();
