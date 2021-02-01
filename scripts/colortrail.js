let mouse = new Vector(innerWidth * 0.5, innerHeight * 0.5);

let mouseHeld = false;

// --- MAIN FUNCTIONS ---
function start() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
}

function update() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ", 1)";

  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2, false);
  ctx.fill();
}

// --- MOUSE EVENT LISTENERS ---
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener("mousedown", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  mouseHeld = true;
})

window.addEventListener("mouseup", function(event) {
  mouseHeld = false;
})

// --- TOUCH EVENT LISTENERS ---
window.addEventListener("touchmove", function(event) {
  mouse.x = event.targetTouches[0].pageX;
  mouse.y = event.targetTouches[0].pageY;
})

window.addEventListener("touchstart", function(event) {
  mouse.x = event.targetTouches[0].pageX;
  mouse.y = event.targetTouches[0].pageY;
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
  start();
}

function draw() {
  requestAnimationFrame(draw);

  if (mouseHeld) {
    update();
  }
}

// --- CANVAS EXECUTION ---
setup();
draw();
