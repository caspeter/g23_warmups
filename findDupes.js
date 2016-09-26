var operations = 0;

function findDupes(arr1,arr2){
  var result = arr1.filter(function(element){
    operations++;
    return arr2.indexOf(element) != -1;
  })
  console.log(operations);
  return result;
}


var arrA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arrB = [1,2,3,5,7,11,13];
var arrC = [16,17,18]

console.log(findDupes(arrA,arrB));
operations = 0;
console.log(findDupes(arrB,arrA));
operations = 0;
console.log(findDupes(arrA,arrC)); //no matches
