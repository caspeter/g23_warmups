//recursive without an array that tracks
function fib(n){
  if( n < 2) {
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
}

console.log(fib(5));

//bottom up recursive algorithm
function fibRecurse(n,arr){
  if (!arr) {
    var arr = [0,1];
    return fibRecurse(n,arr);
  }
  if(arr.length === n) {
    return arr[n-1];
  }
  else {
    arr.push(arr[arr.length-1] + arr[arr.length - 2]);
    return fibRecurse(n,arr);
  }
  return arr;
}

console.log(fibRecurse(80));
