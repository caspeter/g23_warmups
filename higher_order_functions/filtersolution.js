var array = [12,2,3,90,0];

//Print an array that has only numbers larger than 10
// expected result is [12,90]

var gt10 = array.filter(function(element){
  return element > 10;
})
console.log(gt10); //expect [12,90]
//What if I want the numbers that are less than 10?

var lt10 = array.filter(function(element){
  return element < 10;
})
console.log(lt10); //expect [2,3,0]


var students =
[
  {name: "Lori", grade:"3"},
  {name: "Finn", grade:"5"},
  {name: "Sally", grade:"3"},
  {name: "Cory", grade:"1"}
]


// using a for loop write code that will show the info for people in 3rd grade
var thirdgraders = [];

for (var i = 0; i < students.length; i++) {
  if (students[i].grade === "3") {
    thirdgraders.push(students[i])
  }
}

console.log(thirdgraders);

// do the same thing using the filter method

var filteredThirdGraders = students.filter(function(input){
  return input.grade === "3";
})

console.log(filteredThirdGraders);

// What if I just want the names of the third graders?

var namesOfThirdGraders = students.filter(function(input){
  return input.grade === "3";
}).map(function(input){
  return input.name;
})

console.log(namesOfThirdGraders);
