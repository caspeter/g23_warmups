// Combine and Sort: Write a non-destructive function that takes two arrays and returns a new array with all items in alphabetical order.
// Input: Two arrays, ['cat', 'dog', 'fish', 'zebra'], ['lion', 'aardvark', 'gorilla']
// Output: A new array with all items in alphabetical order, ['aardvark', 'cat', 'dog', 'fish', 'gorilla', 'lion', 'zebra']

var arr1 = ['cat', 'dog', 'fish', 'zebra'];
var arr2 = ['lion', 'aardvark', 'gorilla'];

function combine(arr1,arr2){
  var arr3 = arr1.concat(arr2).sort();

  var arr4 = [];
  arr4.push(...arr1,...arr2);
  arr4 = arr4.sort();
  
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);

  return arr3;

}

combine(arr1,arr2);


// destructive
// function combineAndSort(array1, array2) {
//   var newArray = array1.splice();
//   array2.forEach(function(el) {
//     newArray.push(el);
//   });
//   return newArray.sort();
// }



// console.log(combineAndSort(arr1,arr2));
