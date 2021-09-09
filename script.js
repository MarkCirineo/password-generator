// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase;
var uppercase;
var numbers;
var specialCharacters;
var passwordLength

function criteria() {
    lowercase = confirm("Do you want lowercase letters?");
    uppercase = confirm("Do you want uppercase letters?");
    numbers = confirm("Do you want numbers?");
    specialCharacters = confirm("Do you want special characters?");
    if (!lowercase && !uppercase && !numbers && !specialCharacters) {
        alert("Please select at least one character type.");
        criteria();
    }
}

function length() {
    passwordLength = prompt("How long do you want the password to be. (enter a number between 8 and 128)");
    if (passwordLength > 128 || passwordLength < 8) {
        alert("Please enter a number between 8 and 128.")
        length();
    }
}
// length();
// console.log(passwordLength)
// criteria();
// console.log(lowercase);
// console.log(uppercase);
// console.log(numbers);
// console.log(specialCharacters);

var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var randomSpecialCharacter = Math.floor(Math.random() * specialCharactersArray.length);
var randomUppercaseCharacter = Math.floor(Math.random() * uppercaseArray.length);
var randomLowercaseCharacter = Math.floor(Math.random() * lowercaseArray.length);
var randomNumber = Math.floor(Math.random() * numbersArray.length);
// console.log(randomSpecialCharacter);
// console.log(randomUppercaseCharacter);
// console.log(randomLowercaseCharacter);
// console.log(randomNumber);

var password = [];

function generatePassword(a,b,c,d) {
    if (lowercase && uppercase && numbers && specialCharacters) {
        password.push(specialCharactersArray[randomSpecialCharacter]);
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(numbersArray[randomNumber]);
    }
    console.log(password);
}

// criteria();
// length();
// generatePassword();

// for (let i = 0; i < passwordLength.length - 4; i++) {
//     const element = array[i];
    
// }