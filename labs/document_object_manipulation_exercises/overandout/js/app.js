//create new element
let newEl = document.createElement("div");

//customize new element
newEl.style.backgroundColor = "#0000FF"; 
newEl.style.height = "100px";
newEl.style.width = "100px";



newEl.onmouseover = function () {
  //should i have div or newEl in the parentheses? 
  document.getElementById("div").style.color = "#000000";
}

newEl.onmouseout = function () {
  document.getElementById("div").style.color = "#0000FF";
}


//place element on page 
document.body.appendChild(newEl);





