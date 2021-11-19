//variables for colors
let red = 0;
let green = 0;
let blue = 0;

//This is an application that will start a div at a black color, 
let divOne = document.getElementById("divOne");
divOne.style.backgroundColor = "rgb("+red+","+green+", "+blue+")";
divOne.style.width = "500px";
divOne.style.height = "200px";

//access to button 1
let button1 = document.getElementById("button1");
//add event listener 
button1.addEventListener("click", changeColor);

function changeColor(event) {

    //access to attributes
    let answer = event.target.getAttribute("data-value");

    divOne.style.backgroundColor = answer;

}



//and as a user presses buttons associated with RGB, the div will change to new colors. 
//The button presses should affect additively - that is. 
//If a div is currently blue, pressing +red buttons will change the div to a purple color.

//9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
//1 div that will change colors to the rgb color calculated

//1 div that shows the current calculated rgb color

//You must use attributes on the buttons for the values to change the colors by.