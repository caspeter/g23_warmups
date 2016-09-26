//return all permutations of a given array.

//swaps array values in place
function swap(array, x ,y){
  [ array[x],array[y] ] = [ array[y],array[x] ];
};

function perm(arr, firstIndex, lastIndex){
  // || conditions take care of the case when first and last are not passed as args
  var result = [];
  firstIndex = firstIndex || 0;
  lastIndex = lastIndex || arr.length - 1;

  //exit condition
  if (firstIndex === lastIndex) {
    return [arr];
  }

  for (var i = firstIndex; i < arr.length; i++) {
    //swap the values
    swap(arr,firstIndex,i);

    //slice(0) copies the array and firstIndex +1 is setting the start point 1 index over.
    //Apply will ultimately take arr from the exit condition and push it onto the result array.
    result.push.apply(result, perm(arr.slice(0),firstIndex+1,lastIndex));

    //swap the values back, this is the backtrack
    swap(arr,firstIndex,i);

  }

  return result;
}

// console.log( perm([1,2,3] ));
// var coins = perm([1,5,10,25]);
console.log(perm(["a","b","c"]));
