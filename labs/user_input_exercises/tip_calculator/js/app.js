//access input and div
let intTxt = document.getElementById("intTxt");
let dvResult = document.getElementById("dvResult");



//button function
function doThing() {
    //logs tip and total out to console
    console.log ("Tip: $" + intTxt.value * 0.20 + " " + "Total: $" + Math.round(intTxt.value * 1.20));

    //clears input field after user clicks button
    intTxt.value = "";
}



