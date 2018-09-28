function Letter(underlyingCharacter) {
    //A function that returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
    this.underlyingCharacter = underlyingCharacter;
    this.letterGuessed = false;

    // A hint on the homework stated to use toString to name function hmmm
    this.toString = function() {

        if (letterGuessed == (true)) {
            console.log(this.underlyingCharacter)
        }

        else {
            console.log("_")

        }
    }}

module.exports = Letter;



//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

// A string value to store the underlying character for the letter
   
//A boolean value that stores whether that letter has been guessed yet

