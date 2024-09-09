class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  // check mover if in the liquid
  contains(mover) {
    let pos = mover.pos;
    return pos.x > this.x && pos.x < this.x + this.w && pos.y > this.y && pos.y < this.y + this.h;
  }

  calculateDrag(mover) {
    // magnitude of drag is coefficient * speed squared
    let speed = mover.vel.mag();
    let dragMagnitude = this.c * speed * speed;

    // direction is inverse of velocity
    let dragForce = mover.vel.copy();
    dragForce.mult(-1);

    // scale according to magnitude
    dragForce.setMag(dragMagnitude);
    return dragForce;
  }

  show() {
    noStroke();
    fill(220);
    rect(this.x, this.y, this.w, this.h);
  }
}
