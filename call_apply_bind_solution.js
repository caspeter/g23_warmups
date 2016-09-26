var defaultDoc = {
  text: "default",
  saySomething: function(){
    console.log(this.text);
  }
}

var shiaDoc = {
  text: "Do it!"
};

var yodaDoc = {
  text: "There is no try."
};

defaultDoc.saySomething();

// Use apply, bind, and call to print the same thing to the console.
// For example, make all three say - "shia: Do it!"
defaultDoc.saySomething.call(shiaDoc);
defaultDoc.saySomething.apply(shiaDoc);

//notice that bind needs to be invoked after it is called.
defaultDoc.saySomething.bind(shiaDoc)();

//They all look about the same don't they? So what is the difference? Let's look at a more involved example where our function takes arguments.
