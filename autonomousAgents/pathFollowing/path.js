class Path {
  constructor() {
    // path radius
    this.radius = 20;
    // path line between two objects
    this.start = createVector(0, height / 3);
    this.end = createVector(width, (2 * height) / 3);
  }

  // draw path
  show() {
    strokeWeight(this.radius * 2);
    stroke(0, 50);
    line(this.start.x, this.start.y, this.end.x, this.end.y);

    strokeWeight(1);
    stroke(0);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
