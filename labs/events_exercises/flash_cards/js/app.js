//access to div
let txt = document.getElementById("txt");


//access to button 1
let button1 = document.getElementById("button1");
//add event listener 
button1.addEventListener("click", sayAnswer);

//access to button 2
let button2 = document.getElementById("button2");
//add event listener 
button2.addEventListener("click", sayAnswer);

//access to button 3
let button3 = document.getElementById("button3");
//add event listener 
button3.addEventListener("click", sayAnswer);




//When a button is clicked, display the answer to the button's question in a div. 
//Use only one function, and that function must make use of the button's data-attribute.
function sayAnswer(event) {

    //access to attributes
    let answer = event.target.getAttribute("data-value");

    //display answer in div
    txt.innerHTML = answer;
}
