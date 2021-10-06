function setup() {
    createCanvas(1300, 250);
}

function draw() {
    //Draw background and declare variables
    background(200);
    var y = 100;

    // Draw 25 black squares
    for (var i = 0; i < 25; i++) {
        var x = i * 50; 
        
         // Draw blue square if divisble by 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            fill(0, 0, 255);
            square(x, y, 50);
        }
         // Draw green square if divisble by 5 
        else if (i % 5 === 0) {
            fill(0, 255, 0);
            square(x, y, 50);
        }

        // Draw purple circle if divisble by 3 
        else if (i % 3 === 0) {
            fill(153, 31, 240);
            ellipse(x + 25, y + 25, 50, 50);
        }
        // Draw black circle for anything else 
        else {
            fill(0);
            ellipse(x + 25, y + 25, 50, 50);
        }
    }
}


















