var circle_coords=[]; //to store y coordinates of the circles
var frames_count=0; //to find every 10th frame
var diameter=30; 

function setup() {
createCanvas(400, 400);
}

function draw() {
background(127); 

for(let i = 0; i < circle_coords.length; i++){
    //using width/2 as x coordinate and circle_coords[i] as y coordinate
    ellipse(width/2,circle_coords[i],diameter,diameter);
    //moving coordinate 5 pixels down for next iteration
    circle_coords[i]=circle_coords[i]+5;
}

//advancing frames count
frames_count=frames_count+1;
//if count is 10

if(frames_count==10){
    //resetting count
    frames_count=0;
    //adding a new value to the circle_coords which is the y coordinate
    //of top of the window, which is 0
    circle_coords.push(0);

    if(circle_coords.length>100){
      circle_coords.shift();
    }
}
}






