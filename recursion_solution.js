function bottlesForLoop(numBottles){
  for (var i = 0; i < numBottles; i++) {
    // i is the number of bottles that have been taken down so far
    if (i === numBottles - 1) {
      console.log(`${numBottles-i} bottle of beer on the wall, ${numBottles-i} bottles of beer. Take one down pass it around, no more bottles of beer on the wall.`);
    }
    else{
      console.log(`${numBottles-i} bottles of beer on the wall, ${numBottles-i} bottles of beer. Take one down pass it around ${numBottles-i-1} bottles of beer on the wall.`);
    }
  }
}

// Define a recursive function that takes an argument n and prints the lyrics to 99 bottles of beer on the wall, starting with that number n.
function bottlesRecursion(numBottles){
  //base case
  if (numBottles === 1) {
    console.log(`${numBottles} bottle of beer on the wall, ${numBottles} bottle of beer. Take one down pass it around, no more bottles of beer on the wall.`);
  }
  else{
    console.log(`${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer. Take one down pass it around, ${numBottles - 1} bottles of beer on the wall.`);
    bottlesRecursion(numBottles - 1);
  }
}

bottlesForLoop(5);
// bottlesRecursion(1); //testing the base case
bottlesRecursion(5);

////////////////////////////////////

function factorial(num){
  // base case, num = 0
  if (num <= 1){
    console.log("in the base case, num is",num);
    return 1;
  }
  else{
    console.log("not in the base case, num is",num);
    return num * factorial(num-1);
  }
}

console.log(factorial(5));
