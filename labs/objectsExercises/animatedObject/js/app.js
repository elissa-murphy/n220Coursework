let myObject = {
    x: 300,
    y: 300,
    circleSize: 500,   
}

function setup(){
    createCanvas(600, 600);
}


function draw() {
    
    background(0,0,0);
    fill("#FF0000");  
    circle(x,y,circleSize);

}


/*

class Object {
   x = 50;
   y = 50;
   circleSize = 50;
}

let o = new Object();
function setup () {
    createCanvas (600,600);
}

function draw () {
}
*/
