//get access to input & div
let Txt = document.getElementById("txtInt");
let dvResult = document.getElementById("dvResult");


//When the user clicks on the button, 
//update a div on the page to tell the user if:
//what the user typed into the input is divisible by 7(true) or not(false)

//button function
function doThing() {

    //invoke second function
    divisible();

    //seperate function from the onclick function to discern if it is divisible
    function divisible() {

        //if statement
        if (txtInt.value % 7 == 0) {
            dvResult.innerHTML = "True";
        } else {
            dvResult.innerHTML = "False";
        }
    //clears input field after button is clicked
    txtInt.value = "";
    }
}
