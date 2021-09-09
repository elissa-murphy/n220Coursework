var x = 255
var y = 56

function setup () {
    createCanvas (800,600);
    background(99,187,242);
}

function draw () {
    // Green House
    fill(94,191,102);
    stroke(0,0,0);
    rect(350,250,350,349);

    // Red Door
    fill(x,y,y);
    stroke(0,0,0);
    rect(470,400,110,199);

    // Blue Roof
    fill(66,66,x);
    stroke(0,0,0);
    triangle(525, 60, 750, 250, 300, 250);

    // Yellow Sun
    fill(x,x,51);
    stroke(x,x,51);
    circle(70,70,50);

    line(70,120,75,160);
    line(90,115,115,150);
    line(110,100,140,130);
    line(119,80,155,100);
    line(119,60,160,61);
    line(110,40,155,25);
    line(95,25,120,0);
    line(70,20,75,0);
    line(50,24,40,0);
    line(32,35,0,0);
    line(22,50,0,45);
    line(20,80,0,85);
    line(30,100,0,120);
    line(45,115,25,150);
    
}


