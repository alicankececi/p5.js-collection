class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 6;
    this.maxspeed = 8;
    this.maxforce = 0.2;
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force) {
    // mass could be added
    this.acc.add(force);
  }

  // calculating steering force towards a target: steering = desired - velocity
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos); // vector pointing from the location to the target
    // normalize and multiply
    desired.setMag(this.maxspeed);

    // steering force
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);

    this.applyForce(steer);
  }
  show() {
    // triangle pointing in the direction of vel
    let angle = this.vel.heading();
    fill(127);
    stroke(0);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    beginShape();
    vertex(this.r * 2, 0);
    vertex(-this.r * 2, -this.r);
    vertex(-this.r * 2, this.r);
    endShape(CLOSE);
    pop();
  }
}
