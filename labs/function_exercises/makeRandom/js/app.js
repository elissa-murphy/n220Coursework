let dvResult = document.getElementById("dvResult");

//button function, when clicked second function runs 
function doThing() {

    //Create a function that generates and returns a random whole number between 0 and 10.
    //random number generator function
    generateNumber();
    function generateNumber() {
        //generate a random number
        let x = Math.floor(Math.random() * 10);

        //Display that number on the screen
        dvResult.innerHTML = x;
    }
}
