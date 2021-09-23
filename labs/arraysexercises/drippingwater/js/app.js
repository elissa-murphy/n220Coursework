//store y coordinates
var yCoords=[]; 
//variable to find every 10th frame 
var frameCount=0; 
//variable for circle diameter 
var diameter=30; 

function setup() {
createCanvas(400, 400);
}

function draw() {
background(127); 

for(let i = 0; i < yCoords.length; i++){
    //using width/2 as x coordinate and circle_coords[i] as y coordinate
    ellipse(width/2,yCoords[i],diameter,diameter);
    //moving coordinate 5 pixels down for next iteration
    yCoords[i]=yCoords[i]+5;
}

//Add increasing frame count
frameCount=frameCount+1;


//if count is 10
if(frameCount==10){
    //resetting count
    frameCount=0;
    //adding a new value to the circle_coords which is the y coordinate
    //of top of the window, which is 0
    yCoords.push(0);

    if(yCoords.length>100){
      yCoords.shift();
    }
}
}






