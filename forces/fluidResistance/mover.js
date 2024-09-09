class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.rad = mass * 8;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }
  // f = m*a
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    // clear acceleration each frame
    this.acc.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    circle(this.pos.x, this.pos.y, this.rad * 2);
  }

  // bottom adjustments
  checkEdges() {
    if (this.pos.y > height - this.rad) {
      this.vel.y *= -0.9;
      this.pos.y = height - this.rad;
    }
  }
}
