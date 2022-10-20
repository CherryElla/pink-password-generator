// Declaring constant password length variables
const min = 8;
const max = 128;

// Declaring a variable to hold the generate button HTML reference
var generateBtn = document.querySelector("#generate");

// Decalaring all character constants as arrays
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Creating a function that generates a password from users length choice and character options selected

function generatePassword() {

  // A variable is created to hold user choices
  let options = []
  // A variable is created to hold final password generated
  let finalPassword = []
  // A variable is created to hold the users length choice
  var lengthChoice = window.prompt("Please enter your password length");
  if (!lengthChoice) {
    return null;
  }

  // Where the users lengthChoice is not between 8 and 128 characters, the user is prompted to re-enter a length between 8 and 128 
  if (lengthChoice < min || lengthChoice > max) {
    window.alert("Please select a password length between 8 to 128 characters");
  // Return and end this function if the user hits cancel
    return null;

  }

  // Variales are created to hold users true/false selections for characters chosen - via alerts
  var incUpper = window.confirm("Include uppercase characters?");
  var incLower = window.confirm("Include lowercase characters?");
  var incSymbols = window.confirm("Include special characters?");
  var incNumbers = window.confirm("Include numbers?");
// If all return falsey then alert let's them know
  if (!incLower && !incUpper && !incNumbers && !incSymbols) {
    window.alert("Please select at least one character option!");

    return null;
  }

  // If the choice is selected it is stored and concatinated in the "options variable" declared above 
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

  // A random character in "options" array is generated using the randomCharacter function and passed here for the duration of the users length choice until all random characters have been stored
  for (let i = 0; i < lengthChoice; i++) {
    let singleCharacter = randomCharacter(options)
    // A final password is made with each random single character pushed in
    finalPassword.push(singleCharacter)

  }
  // Final password is returned as a string
  return finalPassword.join('')
}

// A function to randomly select a character from any array with any length and round down to nearest decimal
function randomCharacter(array) {
  return array[Math.floor(Math.random() * array.length)];
}


// A function that writes the password to the password box query selected in the HTML
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// An event listener on the generate button that once clicks will write in the users password
generateBtn.addEventListener("click", writePassword);












