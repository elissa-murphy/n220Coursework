//access input 
let txtName = document.getElementById("txtName");


//button function 
function doThing() {
    //Output phrase to the console
    console.log("Hello " + txtName.value);


    //Clear the input field automatically for the user
    txtName.value = "";

}

