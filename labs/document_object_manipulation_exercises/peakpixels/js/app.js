//div styling 
block.style.height = "100px";
block.style.width = "100px";
block.style.backgroundColor = "#2f6622";

function peakPixels() {
    var x = document.getElementById('block');
    var div = document.createElement("div");

    //increasing width by 10%
    var div_width = x.offsetWidth + (0.1 * x.offsetWidth)+"px";
    //increasing height by 10% 
    var div_height = x.offsetHeight + (0.1 * x.offsetHeight)+"px";

    //Set the width of div 
    x.style.width = div_width;
    //Set the height of the div
    x.style.height = div_height;

    document.body.appendChild(div);
}
