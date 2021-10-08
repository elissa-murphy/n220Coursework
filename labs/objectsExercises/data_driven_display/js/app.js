//create new object and give properties
let myObject = {
    width: 15,
    height: 20,
    color: "FF00FF",
    position: (200,200,5),

    //update the circle with properties 
    update () {
        circle(this.width, this.height, this.position);
    }
}



//function setup to create canvas
function setup () {
    createCanvas(600,400);
}

//draw funciton, use update to access circle and object 
function draw () {
    myObject.update();
}


