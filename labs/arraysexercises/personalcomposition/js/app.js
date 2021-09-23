
var num = 100;
var x = [];
var y = [];

function setup (){
  createCanvas (400,400);
  stroke(255,255,255);

  for (var i = 0;i < num; i ++) {
    x[i];
    y[i];
  }
}

function draw () {
  background (0);
  
  for (var i = num-1; i > 0; i--) {
    x[i] = x[i-4];
    y[i] = y[i-4];
  }

  x[0] = mouseX;
  y[0] = mouseY;

  for (var i = 0; i < num; i++) {


    if (mouseX > 200) {
    fill(130, 52, 194);
    circle(x[i],y[i],30);
  } else {
    fill(222, 24, 143);
    circle(x[i],y[i],30);
  }
}
}