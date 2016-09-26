
function fib(n){
  if( n < 2) {
    return n;
  }
  else{
    return fib(n-1) + fib(n-2);
  }
}
// console.log(fib(44)); // SLOWWWWWWW

function fibMemo(n){
  // console.log("entering fibMemo at:", n);
  var memo = {};
  if( n < 2) {
    // console.log("n is less than 2");
    return n;
  }
  else{
    if (!(n-1 in memo)) {
      // console.log("memo doesn't exist for n-1", n-1);
      memo[n-1] = fibMemo(n-1);
    }
    if (!(n-2 in memo)) {
      // console.log("memo doesn't exist for n-2", n-2);
      memo[n-2] = fibMemo(n-2);
    }
    return memo[n-1] + memo[n-2];
  }
}
// console.log(fibMemo(40)); // SLOWWWWWWW

function fibMemo2(n){
  // console.log("entering fibMemo at:", n);
  var memo = {};
  if( n < 2) {
    return n;
  }
  if ((n-1 in memo)) {
    return memo[n-1];
  }
  if ((n-2 in memo)) {
    return memo[n-2];
  }
  return fibMemo2(n-1) + fibMemo2(n-2);
}
//
// console.log(fibMemo2(50)); //SLOWWWWWWW

function fibMemoIt(n){
  var memo = {};
  var f;

  for (var i = 1; i < n+1; i++) {
    if(i<= 2){
      f = 1;
    }
    else{
      f = memo[i-1] + memo[i-2];
    }
    memo[i] = f;
  }
  return memo[n];
}
// console.log(fibMemoIt(80));


//bottom up iterative algorithm
function fibIt(n){
  var arr = [];
  for(var i = 0; i < n + 1; i++) {
    if(i<2) {
      arr.push(i);
    }
    else {
      arr.push(arr[i-1] + arr[i-2]);
    }
  }
  return arr[n];
}

console.log("iterative",fibIt(80));

//bottom up recursive algorithm
function fibRecurse(n,arr){
  if (!arr) {
    var arr = [1,1];
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
