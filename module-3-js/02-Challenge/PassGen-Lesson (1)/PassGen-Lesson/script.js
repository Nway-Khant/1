// Chat Set Initialization
const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numSet = "0123456789";
const specialSet = "!@#$%^&*()+?-=[]{}.<>=_`|~";

// generatePassword()
function generatePassword() {
  let selectedArray = "";
  const passwordLength = getPasswordLength();

  const lowerCase = getChoice("lowercase");
  const upperCase = getChoice("uppercase");
  const numericCharacters = getChoice("numeric");
  const specialCharacters = getChoice("special");

  if (lowerCase) selectedArray += lowerCaseSet;
  if (upperCase) selectedArray += upperCaseSet;
  if (numericCharacters) selectedArray += numSet;
  if (specialCharacters) selectedArray += specialSet;

  if (!selectedArray) {
    alert("You must include at least one character type.");
    return "";
  }

  let passwordString = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordString += selectedArray.charAt(
      Math.floor(Math.random() * selectedArray.length)
    );
  }

  return passwordString;
}

// getPasswordLength()
function getPasswordLength() {
  let userChoice;
  do {
    userChoice = parseInt(
      prompt("Enter the number of characters between 8 and 128: ")
    );
  } while (isNaN(userChoice) || userChoice < 8 || userChoice > 128);
  return userChoice;
}

// getChoice()
function getChoice(currentOption) {
  let userChoice;
  do {
    userChoice = prompt(
      `Would you like ${currentOption} characters? (y/n)`
    ).toLowerCase();
  } while (userChoice !== "y" && userChoice !== "n");
  return userChoice === "y";
}

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
