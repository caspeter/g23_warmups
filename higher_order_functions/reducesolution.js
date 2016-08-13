var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

var sentence = epic.reduce(function (previous, current) {
  console.log('logging -- current: "' + current + '", ' + 'previous: "' + previous + '"');
  return previous + ' ' + current;
});
console.log('return value:', sentence);


//////////////////////////////////////

function sum (array) {
  return array.reduce(function(prev,curr){
    return prev + curr;
  },0);
};

var array = [1,2,3,4];
console.log(sum(array));

/////////////////////////////////
var students =
[
  {name: "Lala", grade:"3"},
  {name: "Finn", grade:"5"},
  {name: "Summer", grade:"3"},
  {name: "Cory", grade:"1"}
]

// Using reduce, give me an array of just the names of the third graders
// Hint, use an initial value
//
var thirdgraders = students.reduce(function(prev,curr){
  if (curr.grade === "3") {
    prev.push(curr.name);
  }
  return prev;
},[]);
console.log(thirdgraders);
