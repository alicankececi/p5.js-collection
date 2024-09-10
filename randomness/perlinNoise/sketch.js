let obj;

function setup() {
  createCanvas(640, 240);
  obj = new Obj();
  background(255);
  stroke(0);
  noFill();
  rect(0, 0, width - 1, height - 1);
}

function draw() {
  obj.step();
  obj.show();
}

class Obj {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    // positions mapped from the noise
    this.x = map(noise(this.tx), 0, 1, 0, width); // generates values in the range of 0 to 1, similar to a random function, but with smooth transitions.
    this.y = map(noise(this.ty), 0, 1, 0, height);

    // move forward through time
    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(2);
    fill(127);
    stroke(0);
    circle(this.x, this.y, 48);
  }
}
