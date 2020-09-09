var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates a random number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png;

var randomImage = "images/" + randomDiceImage; // images/dice1.png-images/dice2.png

var image1 = document.querySelectorAll("img")[0]; //Selecting the first image element

image1.setAttribute("src", randomImage); //Setting the attribute to a random dice


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png-dice6.png

var randomImage2 = "images/" + randomDiceImage2; // images/dice1.png-images/dice6.png

var image2 = document.querySelectorAll("img")[1]; //Selecting the second image element

image2.setAttribute("src", randomImage2); // Setting the attribute to random dice


var heading = document.querySelector("h1");

if (randomImage === randomImage2) {
    heading.innerHTML = "Draw";
} else if (randomImage >= randomImage2) {
    heading.innerHTML = "🚩Player 1 Wins";
} else {
    heading.innerHTML = "Player 2 Wins🚩";
}