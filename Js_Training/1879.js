/*
Json Manipulation Ques-2
Write an implementation of a function that flattens a nested object. The method takes an object and returns a new flattened object where every nested key-value pair is converter to a flat level i.e child key is concatenated to a parent key with a dot between them.

Below is the sample

*input*

{
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
}

*Output:* 
{
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree":"value Three",
  "keyFour.keyA": true,
  "keyFour.keyB": false,
  "keyFour.keyC.keyCOne": "key C one value",
  "keyFour.keyC.keyCTwo": "key C two value",
  "keyFour.keyC.keyCThree": 1234
}


Note: Do not modify the original object, return a new object.

*/

// Function to flatten a nested object
const flattenObject = (obj) => {
  let result = {};
  
  for (let key in obj)
  {
    // If the value is an object, recursively flatten it
    if(typeof obj[key]==='object' && obj[key]!=null && !Array.isArray(obj[key]))
    {
      const tempObj = flattenObject(obj[key]);
      for (let tempObjKey in tempObj) {
        result[key + '.' + tempObjKey] = tempObj[tempObjKey];
      }
    }
    // If the value is not an object, add it to the result object directly
      else
      {
        result[key] = obj[key];
      }
  }
  return result;
}


// Main function
const main = () => {
  const nestedObj = {
    "keyOne": "value One",
    "keyTwo": "value Two",
    "keyThree": "value Three",
    "keyFour": {
      "keyA": true,
      "keyB": false,
      "keyC": {
        "keyCOne": "key C one value",
        "keyCTwo": "key C two value",
        "keyCThree": 1234
      }
    }
  };

  // Flatten the object
  const flattenedObj = flattenObject(nestedObj);
  console.log(flattenedObj); 
}


// Call the main function
main();