var randomNumber1 = Math.floor(Math.random() * 6 + 1); //Generates a random number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png;

var randomImage = "images/" + randomDiceImage; // images/dice1.png-images/dice2.png

var image1 = document.querySelectorAll("img")[0]; //Selecting the first image element

image1.setAttribute("src", randomImage); //Setting the attribute to a random dice