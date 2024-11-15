let vehicles = [];

function setup() {
  let text = createP("click for more vehicles");
  createCanvas(640, 240);
  for (let i = 0; i < 25; i++) {
    vehicles.push(new Vehicle(random(width), random(height)));
  }
}

function draw() {
  background(255);

  for (let v of vehicles) {
    v.separate(vehicles);
    v.update();
    v.borders();
    v.show();
  }
}

function mouseDragged() {
  vehicles.push(new Vehicle(mouseX, mouseY));
}
