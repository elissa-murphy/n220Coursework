        //using for loop
        for (var i = 1; i <= 100; i++) {

            //generating div
            var div = document.createElement("div");

            //Create different background colors for squares with variables
            var red = Math.floor(Math.random() * 256); //the larger the number(256) is, the brighter the color of the squares 
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);

            //CSS styling
            div.style.width="20px";
            div.style.height="20px"
            div.style.float = "left";

            //set different background colors
            div.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

            document.body.appendChild(div);
        }

