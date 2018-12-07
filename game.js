

//  document.body.style.backgroundImage = "url('https://images.freecreatives.com/wp-content/uploads/2015/05/18.jpg')";
  document.body.style.backgroundImage = "url('http://4everstatic.com/pictures/buildings/stone-wall,-black-background-200650.jpg')";


var computerGuess;

// Let's start by grabbing a reference to the <span> below.
var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
console.log(event);
userText.textContent = event.key;
// userText.textContent = "anything";
};

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

var userGuess = event.key;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


if (options.indexOf(userGuess) > -1) {

 if (userGuess === computerGuess) {
     wins++;
     numGuesses = 9;
     guessChoices = [];
 }

 if (userGuess != computerGuess) {
     numGuesses --;
     guessChoices.push(userGuess);
 }

 if (numGuesses === 0) {

 numGuesses = 9;
 losses ++;
 guessChoices = [];

 
}

var html = 
"<h1> The Psychic Game </h1>" +
"<p>Guess what letter I'm thinking of!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + numGuesses + "</p>" +
"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

document.querySelector("#game").innerHTML = html;


}
};
 
 