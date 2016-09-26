let input = "abcd";

//do stuff takes a string and returns an array of all the permutations
function permuteString(string){
  return permute(string[0], string.slice(1));

  // element at i will be the head
  // every other element will be the tail
  // perform the recursion on the head/tail combo
  var head = string[i];
  var tail = string.slice(0,1) + string.slice(i+1);

  for (var i = 0; i < string.length; i++) {
    string[i]
  }
  return tail;
}
// function permute(head,tail){
//   // If tail.length >0
//   // do work
//   // otherwise
//   // you have your base case
//   for (var i = 0; i < string.length; i++) {
//     string[i]
//   }
//   return tail;
// }

// console.clear();
console.log(permuteString("abcd"));
