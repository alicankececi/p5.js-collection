function setup() {
  createCanvas(640, 240);
  background(255);
  stroke(0);
  noFill();
  rect(0, 0, width - 1, height - 1);
}

function draw() {
  //randomGaussian(mean, standardDeviation);
  let x = randomGaussian(320, 60);
  noStroke();
  fill(0, 10);
  circle(x, 120, 16);
}
