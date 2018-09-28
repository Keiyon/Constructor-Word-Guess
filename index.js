var Letter = require("./letter.js");
var Word = require("./word.js");

var inquirer = require("inquirer");
var color = ["blue", "red", "green", "yellow", "orange", "pink", "black", "white", "purple", "salmon"];
var letters = "abcdefghijklmnopqrstuvwxyz";
var remainingGuesses = [10];
var wrongGuesses = [];
// var letterGuessed = [""];
var pickedWord = "";

function startGame() {
    pickedWord = color[Math.floor(Math.random() * color.length)];
    letters = pickedWord.split("");
    // console.log(pickedWord)
}



startGame();

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses