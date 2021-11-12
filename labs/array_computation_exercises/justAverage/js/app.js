//Get access to input and divs
//declare variables
var textInt = document.getElementById("textInt");
var sumInt = document.getElementById("sumInt");
var avgInt = document.getElementById("avgInt");

function breakString() {
    //Takes in a list of comma-separated numbers from the user
    var numbers = textInt.value;

    //Splits that list into an array of numbers
    //Converts the string version of the numbers into number versions
    var array = numbers.split(",");
    var sum = 0;
    var avg = 0;


    //Loops through the array and sums up the values
    for (let i = 0; i < array.length; i++){
        sum += Number(array[i]);
    }

    //Calculates the average of the array
    avg = sum/array.length;

    //Displays to the user (use div)
    //The average
    //The sum
    sumInt.innerHTML= "Sum: " + sum;
    avgInt.innerHTML= "Average: " + avg;

    //Removes the text from the input so the user can type in new numbers
    textInt.value = "";
}





