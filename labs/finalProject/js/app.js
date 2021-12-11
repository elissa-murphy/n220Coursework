let clickedCard = null;
let preventClick = false;
let combosFound = 0;
let pairsFound = document.getElementById("pairsFound");


//button function
function reset() {
    //reset game by reloadng window
    location.reload();
}

//function for when a card is clicked
function cardClicked(e) {
    var target = e.currentTarget;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('done')) {
        //prevent user from clicking square twice 
        return;
    }
    

    target.className = target.className
        .replace ('color-hidden', '')
        .trim();
        target.className += ' done'; 

if (!clickedCard) {
    clickedCard = target;
} else if (clickedCard) {
    //if the cards don't match
    if(clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) { 
        //prevent user from clicking during timeout
        preventClick = true;    
        setTimeout(() => {
            //flip cards back over because they dont match
            clickedCard.className = clickedCard.className.replace('done','').trim() + 'color-hidden'; 
            target.className = target.className.replace('done','').trim()  + 'color-hidden';
            clickedCard = null;
            preventClick = false;
            }, 2000);
        } else {
            //if the cards match
            //change background color to white
            clickedCard.style.backgroundColor = "#FFFFFF"; 
            target.style.backgroundColor = "#FFFFFF"; 

            //update matching pairs 
            combosFound++;
            pairsFound.innerHTML = "Matching Pairs Found: " + combosFound;
            clickedCard = null;

            //if all cards are found
            if (combosFound == 8) {
                //update matching pairs div
                pairsFound.style.fontSize = "20px";
                pairsFound.style.color = "#FF0000";
                pairsFound.innerHTML = "All pairs found!";
            } 
        }
    }
}