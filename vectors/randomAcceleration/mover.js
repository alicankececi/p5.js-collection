class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector();
    this.acc = createVector();
    this.limit = 5;
  }

  update() {
    this.acc = p5.Vector.random2D(); // unit vector in random direction
    this.acc.mult(random(2));

    this.vel.add(this.acc);
    this.vel.limit(this.limit);
    this.pos.add(this.vel);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.pos.x, this.pos.y, 48);
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}
