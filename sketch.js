let offset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for(let x = 0; x <= width; x+=50){
    fill(random(255), random(255), random(255));
    ellipse(x+offset, 200, 25,25);

  }

  offset++;
}