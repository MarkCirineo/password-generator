// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

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
    } else {
        length();
    }
}

function length() {
    passwordLength = prompt("How long do you want the password to be. (enter a number between 8 and 128)");
    if (passwordLength > 128 || passwordLength < 8) {
        alert("Please enter a number between 8 and 128.")
        length();
    } else { 
        generatePassword();
    }
}

var specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allArray = specialCharactersArray.concat(uppercaseArray, lowercaseArray, numbersArray);

var randomSpecialCharacter = Math.floor(Math.random() * specialCharactersArray.length);
var randomUppercaseCharacter = Math.floor(Math.random() * uppercaseArray.length);
var randomLowercaseCharacter = Math.floor(Math.random() * lowercaseArray.length);
var randomNumber = Math.floor(Math.random() * numbersArray.length);
var randomAll = Math.floor(Math.random() * allArray.length);
var random;

var password = [];

function generatePassword() {
    if (lowercase && uppercase && numbers && specialCharacters) {
        password.push(specialCharactersArray[randomSpecialCharacter]);
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(numbersArray[randomNumber]);
        for (let i = 0; i < passwordLength - 4; i++) {
            randomAll = Math.floor(Math.random() * allArray.length);
            password.push(allArray[randomAll]);
        }
    } else if (lowercase && uppercase && numbers && !specialCharacters) {
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(numbersArray[randomNumber]);
        for (let i = 0; i < passwordLength - 3; i++) {
            allArraySliced = allArray.slice(27);
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (lowercase && uppercase && !numbers && specialCharacters) {
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(specialCharactersArray[randomSpecialCharacter]);
        for (let i = 0; i < passwordLength - 3; i++) {
            allArraySliced = allArray.slice(0, 79);
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (lowercase && !uppercase && numbers && specialCharacters) {
        password.push(numbersArray[randomNumber]);
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(specialCharactersArray[randomSpecialCharacter]);
        for (let i = 0; i < passwordLength - 3; i++) {
            allArraySliced = allArray.slice(0, 53).concat(allArray.slice(79));
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (!lowercase && uppercase && numbers && specialCharacters) {
        password.push(numbersArray[randomNumber]);
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(specialCharactersArray[randomSpecialCharacter]);
        for (let i = 0; i < passwordLength - 3; i++) {
            allArraySliced = allArray.slice(0, 53).concat(allArray.slice(79));
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (lowercase && uppercase && !numbers && !specialCharacters) {
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(uppercaseArray[randomUppercaseCharacter]);
        for (let i = 0; i < passwordLength - 2; i++) {
            allArraySliced = allArray.slice(27, 79);
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (lowercase && !uppercase && !numbers && specialCharacters) {
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(specialCharactersArray[randomSpecialCharacter]);
        for (let i = 0; i < passwordLength - 2; i++) {
            allArraySliced = allArray.slice(0, 27).concat(allArray.slice(53, 79));
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (!lowercase && !uppercase && numbers && specialCharacters) {
        password.push(numbersArray[randomNumber]);
        password.push(specialCharactersArray[randomSpecialCharacter]);
        for (let i = 0; i < passwordLength - 2; i++) {
            allArraySliced = allArray.slice(0, 27).concat(allArray.slice(79));
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (!lowercase && uppercase && numbers && !specialCharacters) {
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(numbersArray[randomNumber]);
        for (let i = 0; i < passwordLength - 2; i++) {
            allArraySliced = allArray.slice(27, 53).concat(allArray.slice(79));
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (lowercase && !uppercase && numbers && !specialCharacters) {
        password.push(lowercaseArray[randomLowercaseCharacter]);
        password.push(numbersArray[randomNumber]);
        for (let i = 0; i < passwordLength - 2; i++) {
            allArraySliced = allArray.slice(53);
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (!lowercase && uppercase && !numbers && specialCharacters) {
        password.push(uppercaseArray[randomUppercaseCharacter]);
        password.push(specialCharactersArray[randomSpecialCharacter]);
        for (let i = 0; i < passwordLength - 2; i++) {
            allArraySliced = allArray.slice(0, 53);
            random = Math.floor(Math.random() * allArraySliced.length);
            password.push(allArraySliced[random])
        }
    } else if (!lowercase && !uppercase && !numbers && specialCharacters) {
        for (let i = 0; i < passwordLength; i++) {
            randomSpecialCharacter = Math.floor(Math.random() * specialCharactersArray.length);
            password.push(specialCharactersArray[randomSpecialCharacter]);
        }
    } else if (!lowercase && !uppercase && numbers && !specialCharacters) {
        for (let i = 0; i < passwordLength; i++) {
            randomNumber = Math.floor(Math.random() * numbersArray.length);
            password.push(numbersArray[randomNumber]);
        }
    } else if (!lowercase && uppercase && !numbers && !specialCharacters) {
        for (let i = 0; i < passwordLength; i++) {
            randomUppercaseCharacter = Math.floor(Math.random() * uppercaseArray.length);
            password.push(uppercaseArray[randomUppercaseCharacter]);
        }
    } else if (lowercase && !uppercase && !numbers && !specialCharacters) {
        for (let i = 0; i < passwordLength; i++) {
            randomLowercaseCharacter = Math.floor(Math.random() * lowercaseArray.length);
            password.push(lowercaseArray[randomLowercaseCharacter]);
        }
    }
    console.log(password);
}

// special (0-26); upper (27-52); lower (53-78); number (79-88)
