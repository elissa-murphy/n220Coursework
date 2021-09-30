
//create new element
let newEl = document.createElement("div");

//customize new element
newEl.style.backgroundColor = "#0000FF"; 
newEl.style.height = "100px";
newEl.style.width = "100px";



newEl.onmouseover = function () {
  newEl.style.backgroundColor = "#000000";
}

newEl.onmouseout = function () {
  newEl.style.backgroundColor = "#0000FF";
}


//place element on page 
document.body.appendChild(newEl);





