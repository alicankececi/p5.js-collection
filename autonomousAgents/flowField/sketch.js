// Craig Reynolds: http://www.red3d.com/cwr/steer/FlowFollow.html

// debug flag for toggling all debugging lines
let debug = true;

let flowfield;
let vehicles = [];

function setup() {
  let text = createP("Hit space bar to toggle debugging lines.<br>Click the mouse to generate a new flow field.");

  createCanvas(800, 400);
  flowfield = new FlowField(20);
  // vehichles with random maxSpeed and maxForce values
  for (let i = 0; i < 120; i++) {
    vehicles.push(new Vehicle(random(width), random(height), random(2, 5), random(0.1, 0.5)));
  }
}

function draw() {
  background(255);
  if (debug) flowfield.show();
  // vehicles follows the flow field
  for (let i = 0; i < vehicles.length; i++) {
    vehicles[i].follow(flowfield);
    vehicles[i].run();
  }
}

function keyPressed() {
  if (key == " ") {
    debug = !debug;
  }
}

function mousePressed() {
  flowfield.init();
}
