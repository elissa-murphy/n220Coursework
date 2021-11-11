let textString = document.getElementById("textString");
let output = document.getElementById("output");
let p1 = document.getElementById("p1");

//For the purposes of this exercise, bad words are: clear, water, tires.
let badwords = ["clear","water","tires"];

function breakString() {
    let count = 0;
    //Takes input from a user using a simple text input field.
    let sentence = textString.value;

    //Splits the string on spaces
    let array = sentence.split(" ");

    //Loops through  the array looking for bad words in the array
    for(let i = 0; i < badwords.length; i++) {
        // Looping through the words array
        for(let j = 0; j < array.length; j++){
            // Checking if there is any bad word present
            if(array[j] == badwords[i]) {
                //Adds 1 to a tally count when a bad word is found
                count++;
            }
        }
    }

    //Outputs to the document
    //If any bad words were found (found / not found)
    if (count == 0) {
        // If no bad word then print the message inside the 'p' element
        p1.innerHTML = "No bad words found";
    }
    //How many bad words, in total, were found
    else {
        output.innerHTML = "Bad word found!<br>Total bad words : " + count;
    };


    //Clears out the text field so the user can input a new string
    textString.value = "";
};