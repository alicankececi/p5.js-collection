let path;

function setup() {
  createCanvas(400, 400);
  path = createVector(200, 60);
}

function vectorProjection(a, b) {
  // according to dot product formula, b needs to be unit vector
  let bCopy = b.copy().normalize();
  let sp = a.dot(bCopy);
  bCopy.mult(sp);
  return bCopy;
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  let pos = createVector(100, 200);

  let mouse = createVector(mouseX, mouseY);
  let a = p5.Vector.sub(mouse, pos);

  // draw the path line
  line(pos.x, pos.y, pos.x + path.x, pos.y + path.y);

  let v = vectorProjection(a, path);

  strokeWeight(8);
  stroke(0, 0, 255);

  strokeWeight(1);
  stroke(255);

  // pos
  fill(255, 165, 0);
  noStroke();
  circle(pos.x, pos.y, 16);

  // green for mouse
  fill(0, 255, 0);
  noStroke();
  circle(pos.x + a.x, pos.y + a.y, 16);
  // red for sp - scalar projection
  fill(255, 0, 0);
  noStroke();
  circle(v.x + pos.x, v.y + pos.y, 16);
}
