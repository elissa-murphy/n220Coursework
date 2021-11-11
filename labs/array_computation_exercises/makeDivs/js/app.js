function makeDiv(obj) {
    //You should only have one document.createElement in your code.
    let div = document.createElement("div");    
    div.innerText = "";
    
    //width
    div.style.width = obj.width;

    //height
    div.style.height = obj.height;
    
    //color
    div.style.background=obj.color;
    document.body.appendChild(div);
  }
  
  
function createDivs(){
    let objects = [
        { color: "#FF0000", height: "100px", width: "300px" },
        { color: "#FFFF00", height: "200px", width: "200px" },
        { color: "#FF0000", height: "300px", width: "100px" },
    ];
  
  //Write a loop that creates three divs based on the data in the array. 
    for(i = 0; i < objects.length; i++){
        makeDiv(objects[i]);    
    }
  }
  