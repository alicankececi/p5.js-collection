let randomCounts = [];
let total = 15;

function setup() {
  createCanvas(640, 240);
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);

  let index = floor(randomGaussian(total / 2, total / 10));
  index = constrain(index, 0, total - 1); // ensure the index is within bounds

  randomCounts[index]++;

  stroke(0);
  strokeWeight(2);
  fill(127);
  const w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}
