/*
Json Manipulation Ques-1
Description:
Write a function to convert the source file to the result file.

The source file contains the array of objects and every object has 3 properties batch_id, name, and contact. Convert this array to another array that has an object having the key of batch_id and the array value of all the objects with the same batch_id.

 Note: also remove the batch_id from every object

*/

function transformJson(sourceJson) {
  // Parse the source JSON string
  let sourceData = JSON.parse(sourceJson);

  // Dictionary for storing unique batch_id and corresponding objects
  let groupedData = {};

  // Storing by batch_id and remove batch_id from each object
  sourceData.forEach((item) => {
    let batchId = item.batch_id;

    // Remove batch_id from item
    let itemCopy = { ...item };
    delete itemCopy.batch_id;

    if (!groupedData[batchId]) {
      groupedData[batchId] = [];
    }
    groupedData[batchId].push(itemCopy);
  });

  let resultData = Object.keys(groupedData).map((batchId) => {
    return {
      [batchId]: groupedData[batchId],
    };
  });

  return JSON.stringify(resultData,null,2);
}


// Main function
(function () {
  const sourceJson = `

[
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
  ]
`;

  const resultJson = transformJson(sourceJson);

  // console.log(sourceJson)
  console.log(resultJson);
})();
