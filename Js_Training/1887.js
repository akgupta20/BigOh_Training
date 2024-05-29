/*

Generate Query String URL
Description

EditPreview     
Write an implementation of a function that generate a query string URL of object.The method take object and URL as parameter and return string ,where every key-value pair converted into query string.

Below as sample

*input*

{
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
}

url:"https://localhost:400",

*Output:* 

https://localhost:400?keyOne=value one&keyTwo=value Two&keyThree=value Three

Note: Do not modify the original object, return a new object.
 
*/

function generateQueryStringURL(baseUrl, params) {
  // Check if the params object is provided and is an object
  if (typeof params !== "object" || params === null) {
    throw new Error("Params should be a non-null object");
  }

  // Convert the key-value pairs to query string format
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  // Append the query string to the base URL
  return `${baseUrl}?${queryString}`;
}

// main function
(function () {
  const params = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
  };
  const url = "https://localhost:400";

  const result = generateQueryStringURL(url, params);

  // url after appending query string
  console.log(result); // Output: https://localhost:400?keyOne=value One&keyTwo=value Two&keyThree=value Three
})();
