// Declaring 
const min = 8;
const max = 128;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// A function to take users character choices and generate a random paswword with desired length

function generatePassword() {
  // A variable is created to hold the users choices
  let options = []

  let finalPassword = []
  var lengthChoice = window.prompt("Please enter your password length");
  if (!lengthChoice) {
    return null;
  }

  // Where the users lengthChoice is not between 8 and 128 characters, the user is prompted to re-enter a length between 8 and 128 
  if (lengthChoice < min || lengthChoice > max) {
    window.alert("Please select a password length between 8 to 128 characters");

    return null;

  }
  // Once the user has selected a number between 8 and 128, they are prompted to select uppercase, specials, and or numbers
  // The user inputs of yes/no are stored in variables
  // The user is then alerted "Thanks, here is your password"
  var incUpper = window.confirm("Include uppercase characters?");
  var incLower = window.confirm("Include lowercase characters?");
  var incSymbols = window.confirm("Include special characters?");
  var incNumbers = window.confirm("Include numbers?");

  if (!incLower && !incUpper && !incNumbers && !incSymbols) {
    window.alert("Please select at least one character option!");

    return null;
  }

  // If the choice is selected it is stored in the "options variable"
  if (incNumbers) {
    options = options.concat(numbers)
  }
  if (incSymbols) {
    options = options.concat(symbols)
  }
  if (incLower) {
    options = options.concat(lowerCase)
  }
  if (incUpper) {
    options = options.concat(upperCase)
  }

  console.log(options);

  for (let i = 0; i < lengthChoice; i++) {
    let singleCharacter = randomCharacter(options)

    finalPassword.push(singleCharacter)

  }

  return finalPassword.join('')
}

function randomCharacter(array) {
  return array[Math.floor(Math.random() * array.length)];
}



function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);












