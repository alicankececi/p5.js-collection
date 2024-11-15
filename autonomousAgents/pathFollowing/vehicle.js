class Vehicle {
  constructor(x, y, maxSpeed, maxForce) {
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    this.vel = createVector(2, 0);
    this.r = 4;
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
  }

  run() {
    this.update();
    this.show();
  }

  follow(path) {
    // step 1: check the vehicle’s future position
    let future = this.vel.copy();
    future.setMag(25);
    future.add(this.pos);

    // step 2: find the normal point along the path
    let normalPoint = getNormalPoint(future, path.start, path.end);

    // step 3: move a little further along the path and set a target
    let b = p5.Vector.sub(path.end, path.start);
    b.setMag(25);
    let target = p5.Vector.add(normalPoint, b);

    // step 4: If we are off the path seek that target in order to stay on the path
    let distance = p5.Vector.dist(normalPoint, future);
    if (distance > path.radius) {
      this.seek(target);
    }

    // draw the debugging stuff
    if (debug) {
      fill(127);
      stroke(0);
      line(this.pos.x, this.pos.y, future.x, future.y);
      ellipse(future.x, future.y, 4, 4);

      // draw normal location
      fill(127);
      stroke(0);
      line(future.x, future.y, normalPoint.x, normalPoint.y);
      ellipse(normalPoint.x, normalPoint.y, 4, 4);
      stroke(0);
      if (distance > path.radius) fill(255, 0, 0);
      noStroke();
      ellipse(target.x + b.x, target.y + b.y, 8, 8);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  // steering = desired - vehicle's own velocity
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);

    // if the magnitude of desired equals 0, skip out of here
    if (desired.mag() === 0) return;
    // for sp
    desired.normalize();
    desired.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);

    this.applyForce(steer);
  }

  update() {
    // update vel
    this.vel.add(this.acc);
    // limit speed
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    // reset accelertion to 0 each cycle
    this.acc.mult(0);
  }

  // wraparound
  borders(p) {
    if (this.pos.x > p.end.x + this.r) {
      this.pos.x = p.start.x - this.r;
      this.pos.y = p.start.y + (this.pos.y - p.end.y);
    }
  }

  show() {
    let theta = this.vel.heading();
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    beginShape();
    vertex(this.r * 2, 0);
    vertex(-this.r * 2, -this.r);
    vertex(-this.r * 2, this.r);
    endShape(CLOSE);
    pop();
  }
}

function getNormalPoint(pos, a, b) {
  // vector from a to pos
  let vectorA = p5.Vector.sub(pos, a);
  // vector that points from a to b
  let vectorB = p5.Vector.sub(b, a);

  // scalar projection
  vectorB.normalize();
  vectorB.mult(vectorA.dot(vectorB));
  let normalPoint = p5.Vector.add(a, vectorB);

  return normalPoint;
}
