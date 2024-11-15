class Vehicle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 8;
    this.maxForce = 0.25;
    this.r = 8;
  }

  // find the predicted target position
  pursue(vehicle) {
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    prediction.mult(10);
    target.add(prediction);
    // draw an arrow instead of a circle
    stroke(0);
    fill(0);
    this.drawArrow(this.pos, target, color(220));
    return this.seek(target);
  }

  /*   flee(target) {
    return this.seek(target).mult(-1);
  } */

  seek(target) {
    let force = p5.Vector.sub(target, this.pos);
    force.setMag(this.maxSpeed);
    force.sub(this.vel);
    force.limit(this.maxForce);
    return force;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    pop();
  }

  edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  drawArrow(base, vec, arrowColor) {
    push();
    stroke(arrowColor);
    strokeWeight(3);
    fill(arrowColor);

    // draw a line from base to vec (the predicted position)
    line(base.x, base.y, vec.x, vec.y);

    // calculate the direction angle
    let angle = atan2(vec.y - base.y, vec.x - base.x);

    // draw the arrowhead at the predicted position (vec)
    translate(vec.x, vec.y); // moves the coordinate system
    rotate(angle);
    let arrowSize = 7;
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);

    pop();
  }
}

class Target extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.r = 16;
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
    push();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, this.r * 2);
    pop();
  }
}
