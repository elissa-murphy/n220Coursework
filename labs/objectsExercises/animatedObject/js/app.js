let myObject = {
    x: 300,
    y: 300,
    circleSize: 50,   
}

function setup(){
    createCanvas(600, 600);
}


function draw() {


    background(0,0,0);
    fill("#FF0000");  
    circle(myObject.x,myObject.y,myObject.circleSize);
    myObject.x++;

}
