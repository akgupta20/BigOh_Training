/*

Parsing two JSON objects and Compare
Description:
Write an “assertObjectsEqual” function from scratch which take two object and string as parameter and return string.
The examples below represent different use cases.

Success Case:
*Input*
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);

*Output*
Passed

Failure Case:
*Input*
var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);

*Output*
FAILED Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}

*/

// Function to compare two objects for equality deeply
function deepEqual(obj1, obj2) {
  // Check if both are objects
  if (
    typeof obj1 === "object" &&
    typeof obj2 === "object" &&
    obj1 !== null &&
    obj2 !== null
  ) {
    // Check if both have the same number of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    // Check if all keys and values are the same
    for (let key of keys1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    // Primitive value comparison
    return obj1 === obj2;
  }
}

function assertObjectsEqual(actual, expected, message) {
  if (deepEqual(actual, expected)) {
    return "Passed";
  } else {
    return `FAILED Expected ${JSON.stringify(
      expected
    )}, but got ${JSON.stringify(actual)}`;
  }
}

(function () {
  //Success case
  const actual1 = { foo: 5, bar: 6 };
  const expected1 = { foo: 5, bar: 6 };
  console.log(
    assertObjectsEqual(actual1, expected1, "detects that two objects are equal")
  ); // Output: Passed

  //Failure case
  const actual2 = { foo: 5, bar: 6 };
  const expected2 = { foo: 6, bar: 5 };
  console.log(
    assertObjectsEqual(actual2, expected2, "detects that two objects are equal")
  ); // Output: FAILED Expected {"foo":6,"bar":5}, but got {"foo":5,"bar":6}
})();
