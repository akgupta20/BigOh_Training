/*
Calculator: Expression 
Description
   
Implement a method that takes an expression and performs the calculation accordingly.
example: calculation of [ 1+(2+3)*4-10/2 ]

*/
// function to get the precedence, the precedence of + and - are equal to 1, * & / are equal to 2
function getPrecedence(ch) {
  if (ch == "*" || ch == "/") {
    return 2;
  } else if (ch == "+" || ch == "-") {
    return 1;
  }
}

function performOperation(ch1, ch2, op) {
  switch (op) {
    case "+":
      return ch1 + ch2;
    case "-":
      return ch1 - ch2;
    case "*":
      return ch1 * ch2;
    case "/":
      return ch1 / ch2;
  }
}

function InfixEvaluation(expression) {
  var stackOperand = []; // to store the operands
  var stackOperator = []; // to store the operators

  // iterate through the expression
  for (let ch of expression) {
    // if ch is '(', directly push it into the operator stack
    if (ch == "(") {
      stackOperator.push(ch);
    }

    // if the ch is a number, push it in the operand stack
    else if (!isNaN(ch)) {
      stackOperand.push(Number(ch));
    }

    // ch == ')' then we do the following operations
    /*
            1. pop 2 operands
            2. pop 1 operator
            3. perform the operation and push it.
    */
    else if (ch == ")") {
      while (
        stackOperator.length &&
        stackOperator[stackOperator.length - 1] != "("
      ) {
        const op = stackOperator.pop();
        const secondOperand = stackOperand.pop();
        const firstOperand = stackOperand.pop();
        const result = performOperation(firstOperand, secondOperand, op);
        stackOperand.push(result);
      }

      stackOperator.pop(); // and in last pop the '(' from the operator stack
    }

    // if the op is a operator, we do the following checks
    /*
            pop the values and do the operations until - 
            1. the operator stack is not empty
            2. until a opening bracket '(' is not met
            3. until the higher precedence operators are performed that are behind the current operator in the expression
        */
    else if (ch == "+" || ch == "-" || ch == "/" || ch == "*") {
      while (
        stackOperator.length &&
        stackOperator[stackOperator.length - 1] != "(" &&
        getPrecedence(ch) <
          getPrecedence(stackOperator[stackOperator.length - 1])
      ) {
        const op = stackOperator.pop();
        const secondOperand = stackOperand.pop();
        const firstOperand = stackOperand.pop();
        const result = performOperation(firstOperand, secondOperand, op);
        stackOperand.push(result);
      }
      stackOperator.push(ch);
    }
  }

  // When we didn't encounter ')' and also  the operator stack is not empty, then perform the operations.
  while (stackOperator.length) {
    const op = stackOperator.pop(); // op is not meaningful
    const secondOperand = stackOperand.pop();
    const firstOperand = stackOperand.pop();
    const result = performOperation(firstOperand, secondOperand, op);
    stackOperand.push(result);
  }

  return stackOperand[0];
}

console.log(InfixEvaluation("1+(2+3)*4-8/2")); // 17
console.log(InfixEvaluation("1+2")); // 33
console.log(InfixEvaluation("1+2+3*4")); // 7
// read about naming conventions for the js