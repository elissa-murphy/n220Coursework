let myObject = {
    width: 15,
    height: 20,
    color: "FF00FF",
    position: (200,200,5),

    update () {
        circle(this.width, this.height, this.position);
    }
}




function setup () {
    createCanvas(600,400);
}

function draw () {
    myObject.update();
}


