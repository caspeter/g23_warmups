// Objects Linked to Other Objects - OLOO Pattern
//object creation and initialization must happen in separate steps

var Person = {
  init: function(name){
    this.name = name;
  },
  reverse: function(){
    return this.name.split('').reverse().join('');
  }
};

var shia = Object.create(Person); //create shia and link it to Person
shia.init('Shia'); // initialize the object

shia.greeting = function(){
  console.log(`${this.name} says 'Do it!'.`);
}

console.log(shia);
shia.init("shia");
console.log(shia);
shia.greeting();
console.log(shia.reverse());
