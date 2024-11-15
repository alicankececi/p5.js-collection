class FlowField {
  constructor(r) {
    this.resolution = r;
    // determine number of cols and rows
    this.cols = width / this.resolution;
    this.rows = height / this.resolution;
    // create two dimensional array
    this.field = new Array(this.cols);
    for (let i = 0; i < this.cols; i++) {
      this.field[i] = new Array(this.rows);
    }
    this.init();
  }

  // fills the 2D array with vectors
  init() {
    noiseSeed(random(10000));
    let xoff = 0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        // using perlin noise for smooth transaction
        let angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
        this.field[i][j] = p5.Vector.fromAngle(angle);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
  }

  // draw every vector
  show() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let w = width / this.cols;
        let h = height / this.rows;
        let v = this.field[i][j].copy();
        v.setMag(w * 0.5);
        let x = i * w + w / 2;
        let y = j * h + h / 2;
        strokeWeight(1);
        line(x, y, x + v.x, y + v.y);
      }
    }
  }

  // return a p5.Vector based on a pos (for desired)
  lookup(pos) {
    let column = constrain(floor(pos.x / this.resolution), 0, this.cols - 1);
    let row = constrain(floor(pos.y / this.resolution), 0, this.rows - 1);
    return this.field[column][row].copy();
  }
}
