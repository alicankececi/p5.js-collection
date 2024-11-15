class Vehicle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.r = 6;
    this.maxSpeed = 3;
    this.maxForce = 0.2;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  applyBehaviors(vehicles) {
    let separateForce = this.separate(vehicles);
    let seekForce = this.seek(createVector(mouseX, mouseY));

    // we weigh the forces
    separateForce.mult(5);
    seekForce.mult(1);

    this.applyForce(separateForce);
    this.applyForce(seekForce);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  separate(vehicles) {
    let desiredSeparation = this.r * 2;
    let sum = createVector();
    let count = 0;

    for (let other of vehicles) {
      let d = p5.Vector.dist(this.position, other.position);
      if (this != other && d < desiredSeparation) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.setMag(1 / d);
        sum.add(diff);
        count++;
      }
    }

    if (count > 0) {
      sum.div(count);
      sum.setMag(this.maxSpeed);
      sum.sub(this.vel); // steering
      sum.limit(this.maxForce);
    }
    return sum;
  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    desired.normalize();
    desired.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.position.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    fill(127);
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    circle(0, 0, this.r * 2);
    pop();
  }

  // wraparound
  borders() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }
}
