/*
   Filename: ComplexCode.js
   Description: A complex JavaScript code example showcasing advanced concepts and techniques.
*/

// Global variables
let num1 = 10;
let num2 = 5;
let result = 0;

// Function to add two numbers
function add(a, b) {
   return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
   return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
   return a * b;
}

// Function to divide two numbers
function divide(a, b) {
   if (b !== 0) {
      return a / b;
   } else {
      console.error("Divide by zero error!");
   }
}

// Function to calculate the factorial of a number
function factorial(n) {
   if (n === 0 || n === 1) {
      return 1;
   } else {
      return n * factorial(n - 1);
   }
}

// Function to check if a number is prime
function isPrime(n) {
   if (n <= 1) {
      return false;
   }
   for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % i === 0) {
         return false;
      }
   }
   return true;
}

// Function to generate Fibonacci series up to n terms
function fibonacci(n) {
   let fibSeries = [];
   let prevNum = 0;
   let nextNum = 1;
   fibSeries.push(prevNum);
   fibSeries.push(nextNum);
   for (let i = 2; i < n; i++) {
      let temp = nextNum;
      nextNum = prevNum + nextNum;
      prevNum = temp;
      fibSeries.push(nextNum);
   }
   return fibSeries;
}

// Main program logic
result = add(num1, num2);
console.log(`Addition: ${num1} + ${num2} = ${result}`);

result = subtract(num1, num2);
console.log(`Subtraction: ${num1} - ${num2} = ${result}`);

result = multiply(num1, num2);
console.log(`Multiplication: ${num1} * ${num2} = ${result}`);

result = divide(num1, num2);
console.log(`Division: ${num1} / ${num2} = ${result}`);

console.log(`Factorial of ${num1}: ${factorial(num1)}`);

console.log(`Is ${num2} prime? ${isPrime(num2)}`);

let fibSeries = fibonacci(10);
console.log(`Fibonacci series (first 10 terms): ${fibSeries}`);