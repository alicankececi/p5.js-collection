let pursuer;
let target;

function setup() {
  createCanvas(800, 400);
  pursuer = new Vehicle(100, 100);
  target = new Target(500, 200);
  background(255);
}

function draw() {
  background(255);

  let steering = pursuer.pursue(target);
  pursuer.applyForce(steering);

  let d = p5.Vector.dist(pursuer.pos, target.pos);
  if (d < pursuer.r + target.r) {
    target = new Target(random(width), random(height));
    pursuer.pos.set(width / 2, height / 2);
  }

  pursuer.update();
  pursuer.show();

  target.edges();
  target.update();
  target.show();
}
