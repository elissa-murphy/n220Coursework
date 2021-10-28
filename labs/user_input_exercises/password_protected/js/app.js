//Create an application with two input fields and one button.
let usernameTxt = document.getElementById("usernameTxt");
let passwordTxt = document.getElementById("passwordTxt");
let dvResult = document.getElementById("dvResult");

//If the two fields match, update a DIV on the page with the text "Success" or else "Wrong information".
//For this assignment: use only one if statement to to the check.
//First field should be  "Username"
//Second field should be  "Password"

function doThing() {
    if ((usernameTxt.value == "Username") && (passwordTxt.value == "Password")) {
        //update div
        dvResult.innerHTML = "Success!";
    } else {
        //update div
        dvResult.innerHTML = "Wrong Information";
    }

    //clears field after user inputs text and submits it
    usernameTxt.value = "";
    passwordTxt.value = "";
}


