
//create virtual pet by creating an object and listing it's properties
let myPet = {
    name: "Max",
    energy: 20,
    happiness: 50,
    age: 5,
}




 //Display the stats on the screen by creating new element
 let newEl = document.createElement("newDiv");
 newEl.innerHTML = "Energy = "+ myPet.energy;
 newEl.style.margin = "3px";
 document.body.appendChild(newEl);


//button function to feed pet and add 5 to energy
function feedMax(){
    myPet.energy = myPet.energy + 5;
    console.log(myPet.energy);
    newEl.innerHTML = "Energy = "+ myPet.energy;

    }





 //Display the stats on the screen by creating new element
let secondEl = document.createElement("newDiv");
secondEl.innerHTML = "Happiness = " + myPet.happiness;
secondEl.style.margin = "3px";
document.body.appendChild(secondEl);

//button function to play with pet and add 5 to happiness
function playMax() {
    myPet.happiness = myPet.happiness + 5;
    console.log(myPet.happiness);
    secondEl.innerHTML = "Happiness = " + myPet.happiness;


}


