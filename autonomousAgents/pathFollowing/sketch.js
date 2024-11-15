let debug = true;
let path;
let vehicles = [];

function setup() {
  let text = createP("Hit space bar to toggle debugging lines.");

  createCanvas(640, 240);
  path = new Path();

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let maxSpeed = random(1, 3);
    let maxForce = random(0.01, 0.05);
    vehicles.push(new Vehicle(x, y, maxSpeed, maxForce));
  }
}

function draw() {
  background(255);
  path.show();

  // Update each vehicle
  for (let vehicle of vehicles) {
    vehicle.follow(path);
    vehicle.run();
    vehicle.borders(path);
  }
}

function keyPressed() {
  if (key == " ") {
    debug = !debug;
  }
}
