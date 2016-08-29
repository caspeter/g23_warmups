//Let's look at what happens when we use Object.create
var Person = {
  name:"Teddi",
  reverse: function(){
    return this.name.split('').reverse().join('');
  }
}

// console.log("Object Create", Person);
// var personA = Object.create(Person);
// console.log("before adding a property, personA looks like:",personA);
// console.log("before adding a property, personA.name is:",personA.name);
// personA.name = "Sherée";
// console.log("after adding a property, personA looks like:",personA);
// console.log("after adding a property, personA.name is:",personA.name);
// console.log("after adding a property, Person looks like:",Person);
