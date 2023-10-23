/* sophisticated-javascript-code.js */

// This code is a complex implementation of a palindrome checker using JavaScript.

// Function to remove non-alphanumeric characters and convert string to lowercase
function sanitizeString(string) {
  return string.replace(/[^0-9a-z]/gi, "").toLowerCase();
}

// Recursive function to check if a string is a palindrome
function isPalindrome(string) {
  string = sanitizeString(string);
  if (string.length <= 1) {
    return true;
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
}

// Function to check if an input is a palindrome and display a message accordingly
function checkPalindrome(input) {
  const result = isPalindrome(input);
  if (result) {
    console.log(`'${input}' is a palindrome.`);
  } else {
    console.log(`'${input}' is not a palindrome.`);
  }
}

// Test the checkPalindrome function
checkPalindrome("A man, a plan, a canal, Panama!");
checkPalindrome("No lemon, no melon.");
checkPalindrome("Was it a car or a cat I saw?");
checkPalindrome("JavaScript is awesome!");

// Expected Output:
// 'A man, a plan, a canal, Panama!' is a palindrome.
// 'No lemon, no melon.' is a palindrome.
// 'Was it a car or a cat I saw?' is a palindrome.
// 'JavaScript is awesome!' is not a palindrome.

// You can add other functionalities or expand the code further if needed.