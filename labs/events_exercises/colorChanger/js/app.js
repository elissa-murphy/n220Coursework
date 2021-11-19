let elementOne = document.getElementById("divOne");
elementOne.addEventListener("click", itsClicked);
let elementTwo = document.getElementById("divTwo");
elementTwo.addEventListener("click", itsClicked);
let elementThree = document.getElementById("divThree");
elementThree.addEventListener("click", itsClicked);

//3 grey square divs in a row
divOne.style.backgroundColor = "#7a7a7a";
divTwo.style.backgroundColor = "#7a7a7a";
divThree.style.backgroundColor = "#7a7a7a";
//They should be 200px by 200px,
divOne.style.width = "200px";
divTwo.style.width = "200px";
divThree.style.width = "200px";
divOne.style.height = "200px";
divTwo.style.height = "200px";
divThree.style.height = "200px";
//Margin of 5px
divOne.style.margin = "5px";
divTwo.style.margin = "5px";
divThree.style.margin = "5px";
//All floated left
divOne.style.float = "left";
divTwo.style.float = "left";
divThree.style.float = "left";


//Using only one event handler, write event listeners to respond to a click on each element. 
function itsClicked(event) {
    //access to attributes 
    //Use a data attribute on the elements to store the color to be changed to.
    let color = event.target.getAttribute("data-color");

    //Each element should change to a different color: one red, one green, and one blue.
    event.target.style.backgroundColor = color;
}
