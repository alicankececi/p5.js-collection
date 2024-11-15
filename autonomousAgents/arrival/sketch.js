/* 
modified form of seeking, where the agent slows down as it approaches the target,
coming to a smooth stop instead of overshooting or stopping abruptly
*/

let vehicle;

function setup() {
  createCanvas(800, 400);
  vehicle = new Vehicle(width / 2, height / 2);
}

function draw() {
  background(250);
  let mouse = createVector(mouseX, mouseY);

  fill(127);
  stroke(0);
  strokeWeight(2);
  circle(mouse.x, mouse.y, 48);

  // steering behaviors for agent
  vehicle.arrive(mouse);
  vehicle.update();
  vehicle.show();
}
