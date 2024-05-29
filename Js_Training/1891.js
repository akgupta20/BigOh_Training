/*

Calculator: Variable length arguments
Description:
Implement a calculator function that performs basic calculation operations but the number of arguments provided is not known beforehand.
ex: Addition of 9,4,12,16,23 and 43

*/



// For infinite number of arguments, we used the rest operator
function calculator(operation, ...args) { 

    // Validate the input
    if (args.length === 0) {
        return "No numbers provided";
    }
    
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
            result = args.reduce((acc, curr) => {
                if (curr === 0) {
                    throw new Error("Error: Division by zero");
                }
                return acc / curr;
            });
            break;
        default:
            return "Unknown operation";
    }
    
    return result;
}

// Example usage:
console.log(calculator("add", 9, 4, 12, 16, 23, 43)); // Output: 107
console.log(calculator("subtract", 100, 20, 30)); // Output: 50
console.log(calculator("multiply", 2, 3, -4)); // Output: -24
console.log(calculator("divide", 100, 2, 5)); // Output: 10
console.log(calculator('unknown', 1, 2, 3)); // Output: Unknown operation
