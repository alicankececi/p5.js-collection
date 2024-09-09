let moverA;
let moverB;

function setup() {
  createCanvas(640, 240);
  // big object on the left
  moverA = new Mover(200, 30, 10);
  // small object on the right
  moverB = new Mover(440, 30, 2);
  createP("click to apply wind force to right");
}

function draw() {
  background(220);

  let gravity = createVector(0, 0.1);

  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);

  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverA.display();
  moverA.checkEdges();

  moverB.update();
  moverB.display();
  moverB.checkEdges();
}
