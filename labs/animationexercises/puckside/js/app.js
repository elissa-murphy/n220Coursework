//create canvas
function setup() {
    createCanvas(400,300);
}

function draw() {
    //create background
    background(100);

    //fill circle red when it's on right half of the canvas
    if (mouseX > 200) {
        fill(235, 64, 52);
        circle(mouseX,mouseY,40);
    }

    //fill circle blue when it's on the left half of the canvas 
    else {
        fill(52, 61, 235);
        circle(mouseX,mouseY,40);
    }

}