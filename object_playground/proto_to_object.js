var TimeMachine = function (owner, color, sizeInside, sizeOutside) {
  this.owner = owner;
  this.color = color;
  this.sizeInside = sizeInside;
  this.sizeOutside = sizeOutside;
  this.passengers = [];

  this.addPassenger = function(name) {
    this.passengers.push(name);
  }
  this.passengerCount = function() {
    return this.passengers.length;
  }
  this.isRealTardis = function() {
    return this.sizeInside > this.sizeOutside && this.color === "blue";
  }
  this.listPassengers = function() {
    return this.passengers;
  }
  this.nameLengths = function() {
    //one solution
    //   return this.passengers.reduce(function(prev,curr) {
    //     return prev + curr.length;
    //   }, 0)
    //
    //another solution
    return this.passengers.join('').length;
  }
};

var tardis = new TimeMachine('teddi', 'red',5,10);
console.log(tardis);
console.log(tardis.isRealTardis());




module.exports = timeMachine;
