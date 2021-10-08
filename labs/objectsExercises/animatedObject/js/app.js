//create new object with x, y, and circle size properties 
let myObject = {
    x: 300,
    y: 300,
    circleSize: 50,   
}

//create canvas
function setup(){
    createCanvas(600, 600);
}

//draw function to draw circle and add 1 to property
function draw() {
    background(0,0,0);
    fill("#FF0000");  
    circle(myObject.x,myObject.y,myObject.circleSize);
    myObject.x++;

}
