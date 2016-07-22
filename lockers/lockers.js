// 100 closed lockers. You begin by opening all 100 lockers. Next, you close every second locker. Then you go to every third locker and close it if it is open or open it if it is closed (call this toggling the locker). After your 100th pass of the hallway, in which you toggle only locker number 100, how many lockers are open?
//

//Locker constructor
function Lockers(num){
  var initializeToFalse = function(){
    return false;
  }
  this.numLockers = num;
  this.lockerState = Array.apply(null, new Array(num))
                     .map(initializeToFalse);
}

Lockers.prototype.toggleLockers = function(n){
  for (var i = n -1; i < this.numLockers;) {
    this.lockerState[i] = !this.lockerState[i];
    i = i + n;
  }
  return ("every "+ n+ " locker toggled");
};

// toggle the lockers n number of times where n is the number of lockers we start with
Lockers.prototype.doIt = function(num){
  for (var i = 1; i <= num; i++) {
    this.toggleLockers(i);
  }
  return this.lockerState;
}

var NUMLOCKERS = 100;
var galvLockers = new Lockers(NUMLOCKERS);
galvLockers.doIt(NUMLOCKERS);

var open = [];
var openLockers = galvLockers.lockerState.filter(function(locker, idx){
  if (locker) {
    open.push(idx);
  }
  return locker;
});
console.log("the number of open lockers is:", openLockers.length);
console.log("the list of open lockers is:", open.map(function(num){
  return num + 1;
}));
