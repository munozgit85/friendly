
// Special characters and generate password button to click 
var specialCharacters = "!@#$%^&*()";
var generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Select which criteria to include when prompted 
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 8 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 8;


  //  minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "1";
  var minimumLowerCases = "1";
  var minimumUpperCases = "1";
  var minimumSpecialCharacters = "1";


  // Generator functions**
  var passwordObtain = {
    obtainNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    obtainLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    obtainUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    obtainSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // check if user checked okay 

  if (numbers === true) {
    minimumNumbers = passwordObtain.obtainNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = passwordObtain.obtainLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = passwordObtain.obtainUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = passwordObtain.obtainSpecialCharacters();
    minimumCount++;

  }

  // String variable for the loop 
  var randomPassword = "";

  // loop getting random characters
  for (let i = 8; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPassword += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPassword += minimumNumbers;
  randomPassword += minimumLowerCases;
  randomPassword += minimumUpperCases;
  randomPassword += minimumSpecialCharacters;


  return randomPassword;

}