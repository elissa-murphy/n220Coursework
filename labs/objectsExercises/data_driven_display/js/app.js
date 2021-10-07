class Object {
    width = 15; 
    height = 20;
    color = "FF00FF";
    position = (200,200,5);

    update () {
        circle(this.width, this.height, this.position);
    }
}


let o = new Object();

function setup () {
    createCanvas(600,400);
}

function draw () {
    o.update();
}



/*
let myObject = {
    width: 15,
    height: 20,
    color: "#FF00FF",
    circleSize: 50,
    position:(200,200,fixed),
}


    
}
*/