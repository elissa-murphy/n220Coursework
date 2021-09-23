//circle radius, can be changed later if needed 
var radius = 30
//placeholders for x and y positions
var x = [0,0,0,0,0,0,0,0,0,0,0];
var y = [0,0,0,0,0,0,0,0,0,0,0];

function setup (){
    createCanvas (400,400);
}

function draw () {
//light grey background
   background(150);

//shifts x positions into array in order to save last ten positions of the mouse
    x.shift();
    x.push(mouseX);
    
//shifts y positions into array  in order to save last ten positions of the mouse 
    y.shift();
    y.push(mouseY);

//for loop that draws 11 circles at mouse position
    for (let i = 0; i < 10;i++) {
        ellipse(x[i],y[i],radius,radius);
    }

}