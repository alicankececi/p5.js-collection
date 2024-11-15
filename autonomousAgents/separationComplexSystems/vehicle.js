class Vehicle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.r = 25;
    this.maxSpeed = 3;
    this.maxForce = 0.2;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  // avoid collision
  separate(vehicles) {
    // desired separation is based on the Vehicle’s size.
    let desiredSeparation = this.r * 2;
    let sum = createVector();
    let count = 0;
    for (let other of vehicles) {
      const d = p5.Vector.dist(this.position, other.position);
      if (this != other && d < desiredSeparation) {
        let diff = p5.Vector.sub(this.position, other.position);
        // closer it is, the more the vehicle should flee. farther, the less. so inversely proportional with distance.
        diff.setMag(1 / d);
        sum.add(diff);
        count++;
      }
    }
    if (count > 0) {
      sum.setMag(this.maxSpeed);
      let steer = p5.Vector.sub(sum, this.vel);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
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
    circle(0, 0, this.r);
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
