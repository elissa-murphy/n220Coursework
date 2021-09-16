function setup () {
    createCanvas (400,400);
}

function draw () {
    background (200);

    //for loop that draws circles from the outside to inside 
    for (var i = 40; i > 0; i--) {   
        circle(200,200,i * 5);
    }

}