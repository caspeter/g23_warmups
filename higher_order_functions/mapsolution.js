// Write a function that takes 2 inputs. One input is an array and the second input is a callback function.

// The callback function will expect three inputs:
// currentValue: The current element being processed in the array.
// index: The index of the current element being processed in the array.
// array: The array map was called upon.

// Your myMap function should return an array.

function myMap(array, callbackFnc){
  var returnArray = [];
  for (var i = 0; i < array.length; i++) {
    returnArray.push(callbackFnc(array[i],i,array));
  }
  return returnArray; //return the transformed array
}

var numArray = [1,2,3,4];

var addedArray = myMap(numArray,function(currValue){
  return currValue + 4;});

var dollarArray = myMap(numArray, function(currValue,index){
  return `The Person at index ${index} owes $${currValue}`
})


console.log(addedArray); // [5,6,7,8]
console.log(dollarArray);
// [ 'The Person at index 0 owes $1',
//   'The Person at index 1 owes $2',
//   'The Person at index 2 owes $3',
//   'The Person at index 3 owes $4' ]
