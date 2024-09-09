let mover;

function setup() {
  createCanvas(640, 240);
  mover = new Mover();
}

function draw() {
  background(220);

  mover.update();
  mover.show();
}
