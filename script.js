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

