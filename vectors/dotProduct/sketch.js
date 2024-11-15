// using the dot product to compute the angle between two vectors

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);

  let mousePos = createVector(mouseX, mouseY);
  let centerPos = createVector(width / 2, height / 2);

  let v = p5.Vector.sub(mousePos, centerPos);
  v.normalize();
  v.mult(100);

  let xaxis = new createVector(100, 0);

  /* 

  let d = a.dot(b);
  theta = acos(d/a.mag()*b.mag()) (angle)  

  -----------

  angleBetween(v) {
    let dot = this.dot(v);
    let angle = Math.acos(dot / (this.mag() * v.mag()));
    return angle;
  }

  */

  // draw the vectors
  drawVector(v, centerPos);
  drawVector(xaxis, centerPos);

  let theta = p5.Vector.angleBetween(v, xaxis);

  fill(0);
  textSize(32);
  textFont("courier");
  text(int(degrees(theta)) + " degrees\n" + nf(theta, 1, 2) + " radians", 10, 160);
}

// render vector
function drawVector(v, pos) {
  push();
  let arrowsize = 6;
  translate(pos.x, pos.y);
  stroke(0);
  strokeWeight(2);
  rotate(v.heading());
  let len = v.mag();
  // Draw three lines to make an arrow
  line(0, 0, len, 0);
  line(len, 0, len - arrowsize, +arrowsize / 2);
  line(len, 0, len - arrowsize, -arrowsize / 2);
  pop();
}
