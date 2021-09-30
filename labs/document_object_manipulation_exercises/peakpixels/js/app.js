block.style.height = "100px";
block.style.width = "100px";
block.style.backgroundColor = "#2f6622";

function peakPixels() {
    var x = document.getElementById('block');

    //accessing the div using id 
    var div = document.createElement("div");

    //getting the width from the div and increasing 10% , adding px to it. 
    var div_width = x.offsetWidth + (0.1 * x.offsetWidth)+"px";

    //getting the height from the div and increasing 10% , adding px to it.
    var div_height = x.offsetHeight + (0.1 * x.offsetHeight)+"px";

    //Setting the width of div to new div_width
    x.style.width = div_width;

    //Setting the height of the div to new div_height
    x.style.height = div_height;

    document.body.appendChild(div);
}
