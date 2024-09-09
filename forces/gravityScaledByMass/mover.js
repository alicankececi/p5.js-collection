class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.rad = m * 8;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127, 127);
    ellipse(this.pos.x, this.pos.y, this.rad * 2);
  }

  checkEdges() {
    if (this.pos.x > width - this.rad) {
      this.pos.x = width - this.rad;
      this.vel.x *= -1;
    } else if (this.pos.x < this.rad) {
      this.pos.x = this.rad;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - this.rad) {
      this.pos.y = height - this.rad;
      this.vel.y *= -1;
    }
  }
}
