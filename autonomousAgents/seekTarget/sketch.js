let vehicle;

function setup() {
  createCanvas(800, 400);
  vehicle = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(250);

  let mouse = createVector(mouseX, mouseY);

  fill(127);
  stroke(0);
  strokeWeight(2);
  circle(mouse.x, mouse.y, 48);

  // seek the target
  vehicle.seek(mouse);
  vehicle.update();
  vehicle.show();
}
