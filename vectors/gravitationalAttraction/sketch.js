let mover;
let attractor;

let G = 1; // gravitational constant

function setup() {
  createCanvas(640, 240);
  mover = new Mover(300, 50, 2);
  attractor = new Attractor();
}

function draw() {
  background(220);
  let force = attractor.attract(mover);
  mover.applyForce(force);
  mover.update();

  attractor.show();
  mover.show();
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
