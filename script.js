
//Declare special cahracters not listed 
var specialCharacters = "!@#$%^&*()";
//create click button 
var generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Select okay to each criteria to include when prompted 
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want for your new password.  It must be more than 8 but less than 128.");

  var numbers = confirm("Click okay to confirm you would like numbers in the  password?");

  var lowerCases = confirm("Click okay to confirm you would like lowercase letters in the password?");

  var upperCases = confirm("Click okay to confirm you would like uppercase letters password?");

  var special = confirm("Click okay to confirm you would like special characters letters password?");

  // Start at  zero 
  var minimumCount = 0;


  //  no minimum amount of eachnumbers, lowerCases, upperCases & specialCharacters 

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Generate password function 
  var passwordObtain = {
    obtainNumbers: function() {
      return (Math.floor(Math.random()) * 10); // 10 different numbers 
    },

    obtainLowerCases: function() {
      return (Math.floor(Math.random()) * 26 );//26 letters 
    },

    obtainUpperCases: function() {
      return (Math.floor(Math.random()) * 26 );//26 letters 
    },

    obtainSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]//refers to the special characters declared above 
    }

};

  // If user check okay to confirm ()

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

  //  variable for the loop and to use to return a random password 
  var randomPassword = "";

  // For loop to generating random characters ( 4 types of characters)
  //parseInt uses the prompt above "passwordLength"( the amount of characters inputed) and turns this into a number 
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++)
   { var randomNumberPicked = Math.floor(Math.random() * 4);
    randomPassword += randomNumberPicked;
  }

  // return 4 different characters to obtain randomPassword 
  randomPassword += minimumNumbers;
  randomPassword += minimumLowerCases;
  randomPassword += minimumUpperCases;
  randomPassword += minimumSpecialCharacters;

 return randomPassword;



}