/*

Calculator: Basic Operations
Implement a calculator to perform the following operation
- Simple algebraic operations like add, subtract, multiply, divide, modulus, etc.

*/

// calculator function
function calculator(operation, firstOperand, secondOperand) {
  // Perform the operation
  let result;

  switch (operation) {
    case "add":
      result = firstOperand + secondOperand;
      break;
    case "subtract":
      result = firstOperand - secondOperand;
      break;
    case "multiply":
      result = firstOperand * secondOperand;
      break;
    case "divide":
      result = firstOperand / secondOperand;
      break;
    case "modulus":
      result = firstOperand % secondOperand;
      break;
    default:
      return "Unknown operation";
  }

  return result;
}

//anonymous main function self called to avoid again call of main function
(function () {
  // Test cases
  console.log(calculator("add", 10, 20)); // Output: 30
  console.log(calculator("subtract", 100, 60)); // Output: 40
  console.log(calculator("multiply", 5, 10)); // Output: 50
  console.log(calculator("modulus", 100, 2)); // Output: 0
  console.log(calculator("divide", 500, 5)); // Output: 50
})();
