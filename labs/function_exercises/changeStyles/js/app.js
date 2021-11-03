//Create an application with three divs on the page
let dvOne = document.getElementById("dvOne");
let dvTwo = document.getElementById("dvTwo");
let dvThree = document.getElementById("dvThree");

//Styled to be square and red 
//div one
dvOne.style.width = "50px";
dvOne.style.height = "50px";
dvOne.style.backgroundColor = "#FF0000";
dvOne.style.margin = "5px";

//div two
dvTwo.style.width = "50px";
dvTwo.style.height = "50px";
dvTwo.style.backgroundColor = "#FF0000";
dvTwo.style.margin = "5px";

//div three
dvThree.style.width = "50px";
dvThree.style.height = "50px";
dvThree.style.backgroundColor = "#FF0000";
dvThree.style.margin = "5px";

//Create a function for each button that is invoked when that button is clicked
//Use the changeStyle function to change the style of the div that was clicked

//first div
function changeOne(){
    changeStyleOne();
    function changeStyleOne() {
        //backgroundColor of blue
        dvOne.style.backgroundColor = "#0000FF";
        //smaller width than its height
        dvOne.style.width = "35px";
    }
}


//second div
function changeTwo(){
    changeStyleTwo();
    function changeStyleTwo() {
        //backgroundColor of blue
        dvTwo.style.backgroundColor = "#0000FF";
        //smaller width than its height
        dvTwo.style.width = "35px";
    }
}


//third div
function changeThree(){
    changeStyleThree();
    function changeStyleThree() {
        //backgroundColor of blue
        dvThree.style.backgroundColor = "#0000FF";
        //smaller width than its height
        dvThree.style.width = "35px";
    }
}