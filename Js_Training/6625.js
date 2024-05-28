const findMinimumNumberOfBrackets = (exp) => {
  const stack = new Array();

  const n = exp.length;

  for (let i = 0; i < n; i++) {
    if (exp[i] == "}" && stack.length) {
      if (stack[stack.length - 1] == "{")
        stack.pop(); // removing balance bracket pair
      else stack.push(exp[i]); // inserting closing bracket
    } else stack.push(exp[i]); // inserting closing bracket
  }

  const lenOfReducedExp = stack.length; // After removing balace bracket pairs

  // If length of reduced expression is odd then not possible by reverse
  if (lenOfReducedExp % 2) return -1;

  let allAreBestPair = false;
  // Reversing in the best pair we need 1 operation eg. "}}"
  // not best pair need 2 operation eg. "}{"

  // In all best pair case we have even number of same bracket
  let close = 0;

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] == "}") close++;
    else break;
  }

  allAreBestPair = close % 2 == 0; // If even the all are best


  return (lenOfReducedExp / 2) + (allAreBestPair ? 0 : 1);
};

function main() {
  const exp1 = "{{{";

  console.log(findMinimumNumberOfBrackets(exp1));

  const exp2 = "{{{{}}";

  console.log(findMinimumNumberOfBrackets(exp2));

  const exp3 = "}{";

  console.log(findMinimumNumberOfBrackets(exp3));

  const exp4 = "}{{}}{{{";

  console.log(findMinimumNumberOfBrackets(exp4));
}

main();
