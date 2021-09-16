function setup () {
    createCanvas(700,700);
}

function draw () {
    //white background
    background(255,255,255);
    //nested for loops, first loop create circles horizonatally, 
    //while the second creates then vertically 
    for (let x = 0; x <= 700; x += 50) {
        for (let y = 0;  y <= 700; y += 50) { 
        //draw circles that are filled light pink and outlined a darker pink
          ellipse(x, y, 30, 30);
          fill(245, 176, 240);
          stroke(212, 91, 203);
        }
    }
}