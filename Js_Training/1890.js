/*

Calculator: With validations
Description  
Handle the following cases for all the calculation methods implemented.
1. When the argument provided is Not a number. (ex-string).
2. Number of parameters is less or more than the number of arguments.
3. Using a variable that is not declared.
4. Using a variable that is not initialized.

Note: 
When validation fails return a statement why the following action is not executable.
Make a single function for validation check, covering all scenarios whether it be a negative number or not a number or a zero etc

*/


// Validation function to handle all scenarios for validate the arguments
function validateArgs(args) {
  if (args.length === 0) {
    return "No numbers provided";
  }

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number" || isNaN(args[i])) {
      return `Argument ${i + 1} is not a number`;
    }
  }

  return null; // No errors
}


// calculator function
function calculator(operation, ...args) {
  // Validate arguments
  const validationError = validateArgs(args);
  if (validationError) {
    return validationError;
  }

  // Perform the operation
  let result;

  switch (operation) {
    case "add":
      result = args.reduce((acc, curr) => acc + curr, 0);
      break;
    case "subtract":
      result = args.reduce((acc, curr) => acc - curr);
      break;
    case "multiply":
      result = args.reduce((acc, curr) => acc * curr, 1);
      break;
    case "divide":
      try {
        result = args.reduce((acc, curr) => {
          if (curr === 0) {
            throw new Error("Division by zero");
          }
          return acc / curr;
        });
      } catch (error) {
        return `Error: ${error.message}`;
      }
      break;
    default:
      return "Unknown operation";
  }

  return result;
}


//main function self called
(function () {
  // Test cases of valid operations
  console.log(calculator("add", 10, 20, 30)); // Output: 60
  console.log(calculator("subtract", 100, 20, 30)); // Output: 50
  console.log(calculator("multiply", 2, 3, -4)); // Output: -24
  console.log(calculator("divide", 100, 2, 5)); // Output: 10
  console.log(calculator("invalidOperation", 1, 2, 3)); // Output: Invalid operation

  // Test cases of invalid operations

  console.log(calculator("add", 9, "4", 12)); // Output: Argument 2 is not a number
  console.log(calculator("subtract")); // Output: No numbers provided
  console.log(calculator("divide", 100, 0)); // Output: Error: Division by zero
  console.log(calculator("unknown", 1, 2, 3)); // Output: Unknown operation
})();
