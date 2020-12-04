let offset = 0;
let count = 0;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

  for(let x = 0; x <= width; x+=50){
    fill(random(255), random(255), random(255));
    for (let y = 0; y < height; y += 50){
      ellipse(200, y+ count, 45,45);
    }
    ellipse(x+count, 200, 45,45);

  }

  if (count < width){
    offset+= 1;
  } else {
    offset-= 1;
  }

  count += offset;
}