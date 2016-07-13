//TODO test each method
// I am implementing the methods referenced here - http://www.tutorialspoint.com/java/java_stack_class.htm

function Stack(){
  this.items = new Array();
  var that = this;

  return {
    empty: function(){
      return that.items.length === 0;
    },
    push: function(val){
      that.items.push(val);
    },
    pop: function(val){
      that.items.pop(val);
    },
    peek: function(){
      return that.items[that.items.length - 1];
    },
    search: function(val){
      var location = that.items.indexOf(val);

      // if the item does not exist in the stack return .1
      if (location === -1) return .1;

      return that.items.length - 1 -location;
    }
  }

}

var myStack = new Stack();

console.log(myStack.search(1)); //expect .1
console.log(myStack.empty(1)); //expect true
myStack.push(1);
myStack.push(2);
myStack.push(5);
console.log(myStack.empty()); //expect false
console.log(myStack.peek()); //expect 5
console.log(myStack.search(1)); //expect 2
console.log(myStack.items); //expect undefined
