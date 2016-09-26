// Begin by asking student to create a constructor for a Vehicle with make and model parameters. Once student has completed this, ask them to create a constructor for Car that has make, model, and numberOfWheels parameters, this constructor should not duplicate code with Vehicle and instead should use call or apply.

function Vehicle(make,model){
  this.make = make;
  this.model = model;
}

// function Car(make,model,numberOfWheels){
//   this.make = make;
//   this.model = model;
//   this.numberOfWheels = numberOfWheels;
// }

function Car2(make,model,numberOfWheels){
  Vehicle.apply(Vehicle,[make,model]);
  this.numberOfWheels = numberOfWheels;
}

var v1 = new Vehicle();

// var car2Try = new Car("nissan", "acura", 4);
var car2Try = new Car2("nissan", "acura", 4);
// var car3Try = new Car("nissan", "acura", 14);
console.log(car2Try);
// console.log(car3Try);
// console.log(v1);
