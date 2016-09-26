function removeDupes(string){
  var mySet = new Set();
  console.log(mySet);
  return Array.from(mySet).join('');
}

function removeDupes2(string){
  var arr = [];
  for (var i = 0; i < string.length; i++) {
    if (arr.indexOf(string[i]) == -1) {
      arr.push(string[i]);
    }
  }
  return arr.join('');
}

console.log(removeDupes('AABB')); // 'AB'
console.log(removeDupes('AaAaBbBb')); // 'AaBb'
console.log(removeDupes('cAtCaT')); // 'cAtCaT'

console.log(removeDupes2('AABB')); // 'AB'
console.log(removeDupes2('AaAaBbBb')); // 'AaBb'
console.log(removeDupes2('cAtCaT')); // 'cAtCaT'
