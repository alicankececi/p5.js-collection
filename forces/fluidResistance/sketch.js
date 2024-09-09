let movers = [];

let liquid;

function setup() {
  createCanvas(640, 240);
  reset();
  // create liquid object with small coefficient
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(255);

  liquid.show();

  for (let i = 0; i < movers.length; i++) {
    // check if the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    // scale gravity by mass
    let gravity = createVector(0, 0.1 * movers[i].mass);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();
  }
}

function mousePressed() {
  reset();
}

function reset() {
  for (let i = 0; i < 9; i++) {
    movers[i] = new Mover(40 + i * 70, 0, random(0.5, 3));
  }
}
