// Create a function that takes an amount and an array of coins. Coins defaults to [25, 10, 5, 1]. Return an array of the lowest amount of change.
//
// So amount 78 would return [25, 25, 25, 1, 1, 1]

var coins = [25,10,5,1];

//Brute Force
function makeChange(amount,coinsArr){
  var result = [];
  for (var i = 0; i < coinsArr.length; i++) {
    if ((amount - coinsArr[i]) > -1){
      result.push(coinsArr[i]);
      amount-= coinsArr[i];
      i--;
    }
  }
  return result;
}

console.log(makeChange(78,coins)); // [25, 25, 25, 1, 1, 1]
console.log(makeChange(75,coins)); //
console.log(makeChange(0,coins)); //
console.log(makeChange(27,coins)); //
console.log(makeChange(270,coins)); //
