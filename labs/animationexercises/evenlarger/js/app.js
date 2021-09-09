//create global variable to change later on
var size = 1

//create canvas
function setup () {
    createCanvas (400,400);
}

function draw() {
//fill background and draw/fill circle
    background(100);
    fill(79,245,5);
    circle(200,200,size);
    
//increase diameter by 1 per frame
    size++;

//use if statement to change diameter size back to 1 once it reaches 200
    if (size > 200) {
    size = 1
 }
}