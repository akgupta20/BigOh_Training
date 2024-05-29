/*

Calculator: Advance Operations
Description:
Implement a calculator to perform the following operation
1. Square, sqr Root 
2. Log, ln
3. sin, tan, and cos
4. X to the power Y
5. Area of the circle.

Note:
* handle cases for a negative number
* use proper variable declaration

*/


function isNegativeNumber(number) {
  return number < 0;
}


// calculator function
function calculator(operation, firstOperand, secondOperand) {
    let result;

    switch (operation) {
        case "square":
            result = firstOperand * firstOperand;
            break;
        case "squareRoot":
            if (isNegativeNumber(firstOperand)) {
                return "Square root of a negative number is not possible";
            }
            result = Math.sqrt(firstOperand);
            break;
        case "log":
            if (isNegativeNumber(firstOperand)) {
                return "Logarithm of a negative number is not possible";
            }
            result = Math.log10(firstOperand);
            break;
        case "ln":
            if (isNegativeNumber(firstOperand)) {
                return "Logarithm of a negative number is not possible";
            }
            result = Math.log(firstOperand);
            break;
        case "sin":
            result = Math.sin(firstOperand);
            break;
        case "cos":
            result = Math.cos(firstOperand);
            break;
        case "tan":
            result = Math.tan(firstOperand);
            break;
        case "power":
            result = Math.pow(firstOperand, secondOperand);
            break;
        case "circle":
            result = Math.PI * firstOperand * firstOperand;
            break;
        default:
            return "Unknown operation";
    }

    return result;
}

//main function 
(function () {
    // Test cases for valid operations
    console.log(calculator("square", 10)); // Output: 100
    console.log(calculator("squareRoot", 16)); // Output: 4
    console.log(calculator("log", 100)); // Output: 2
    console.log(calculator("ln", 100)); // Output: 4.605170185988092
    console.log(calculator("sin", 90)); // Output: 0.8939966636005579
    console.log(calculator("cos", 0)); // Output: 1
    console.log(calculator("tan", 45)); // Output: 1.6197751905438615
    console.log(calculator("power", 2, 3)); // Output: 8
    console.log(calculator("circle", 10)); // Output: 314.1592653589793

    // Test cases for invalid operations
    console.log(calculator("invalidOperation", 10)); // Output: Unknown operation
    console.log(calculator("squareRoot", -16)); // Output: Square root of a negative number is not possible
    console.log(calculator("log", -100)); // Output: Logarithm of a negative number is not possible

})();