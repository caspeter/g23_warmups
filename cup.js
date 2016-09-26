// Create a cup that is an object. It starts out empty. When you pour coffee into it, the cup becomes full When you drink the coffee the cup becomes empty What other properties can the cup have? Add some. How can those properties be changed? Try it out.

var Cup = function(){
  this.isFull = false;
}

Cup.prototype.pour = function(){
  this.isFull = true;
}

Cup.prototype.drink = function(){
  this.isFull = false;
}

var coffee = new Cup();

coffee.pour();
console.log(coffee);
