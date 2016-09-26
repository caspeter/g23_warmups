// Write a function that takes an object/hash/dictionary of people (keys) and their subsequent ages as its argument, and then it returns the name of the oldest living person.

function oldest(people){
  var max_person_age = 0;
  var max_person;

  for (var key in people) {
    if (people[key] > max_person_age) {
      max_person_age = people[key];
      max_person = key;
    }
  }
  return max_person;
}

var people = {
  "T": 4,
  "L": 7,
  "O": 1,
  "J": 24
}

console.log(oldest(people));
