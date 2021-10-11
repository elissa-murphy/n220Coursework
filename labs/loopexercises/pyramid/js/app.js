function setup() {
  //create canvas
  createCanvas(200,200);
}


function draw() {
  //for loop from i=0 to i=3
  for(var i = 0; i < 4; i++) {

    //for loop from x=0 to x=i
    for(var x = 0; x <= i; x++) {

      //rectangle red fill color
      fill(255,0,0);

      //rectangle white stroke
      stroke(255);

      //draw rectangle 
      rect(50 * x, 50 * i, 50, 50);
    }
  }
}