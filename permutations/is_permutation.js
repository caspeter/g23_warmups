
function isPermutation(str1,str2){
  //if the lengths are not the same, they are definitely not permutations of one another
  if (str1.length != str2.length) {
    return false;
  }

  //convert to lowercase, make an array, and sort each string
  var str1Arr = str1.toLowerCase().split('').sort();
  var str2Arr = str2.toLowerCase().split('').sort();

  //do a basic string comparison of the two strings
  return str1Arr.join('') === str2Arr.join('');
}

var str0 = "stop";
var str1 = "tops";
var str2 = "goodbye";
console.log(isPermutation(str0,str1));
console.log(isPermutation(str1,str2));
