class Mover {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector();
    this.acc = createVector();
    this.limit = 5;
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    // find direction
    let dir = p5.Vector.sub(mouse, this.pos);

    // normalize
    dir.normalize();

    // scale
    dir.mult(0.2);

    // OR we have function for normalize + mult
    // dir.setMag(0.2);

    // accelerate
    this.acc = dir;

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
}
