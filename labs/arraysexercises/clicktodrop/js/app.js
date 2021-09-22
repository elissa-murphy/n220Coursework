var brick = []; 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  noStroke();
  
  for (var i = 0; i < brick.length; i++) {
    fill(156, 55, 16);
    rect(brick[i][0], brick[i][1], 50, 25);
    brick[i][1] += 1;
  }
}
function mousePressed() {
  brick.push([mouseX, mouseY, random(255)]);
}




















