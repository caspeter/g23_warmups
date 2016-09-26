// 16.1 Cracking the coding interview
function swap(num){
  num = num.toString().split("");
  num[0] = (parseInt(num[0]) - parseInt(num[1]));
  num[1] = (parseInt(num[0]) + parseInt(num[1]));
  num[0] = (parseInt(num[1]) - parseInt(num[0]));

  return parseInt(num.join(''));
}

console.log(swap(34));
console.log(swap(43));

console.log(swap(12));
console.log(swap(21));

console.log(swap(19));
console.log(swap(91));
