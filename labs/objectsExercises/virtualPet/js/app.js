//how can i easily display all of the stats on the screen?
//how do i get the properties to update every time the button is clicked? 

//create virtual pet by creating an object and listing it's properties
let myPet = {
    name: "Max",
    energy: 20,
    happiness: 50,
    age: 5,
}




//button function to feed pet and add 5 to energy
function feedMax(){
    myPet.energy = myPet.energy + 5;
    console.log(myPet.energy);

    //Display the stats on the screen
        let newEl = document.createElement("newDiv");
        newEl.innerHTML = "Energy = "+ myPet.energy;
        newEl.style.margin = "3px";
        document.body.appendChild(newEl);
    }




//button function to play with pet and add 5 to happiness
function playMax() {
    myPet.happiness = myPet.happiness + 5;
    console.log(myPet.happiness);

    //Display the stats on the screen
    let secondEl = document.createElement("newDiv");
    secondEl.innerHTML = "Happiness = " + myPet.happiness;
    secondEl.style.margin = "3px";
    document.body.appendChild(secondEl);

}

