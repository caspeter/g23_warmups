var analyzeDocument = function(){
  console.log(this.text);
}

var shiaDoc = {
  text: "Do it!"
};

var yodaDoc = {
  text: "There is no try."
};

// Use apply, bind, and call to print the same thing to the console.
// For example, make all three say - "shia: Do it!"


///////////////////////////////////////////////

var sayYourNickName = function(firstName,lastName){
  console.log(firstName + ' "' + this.nickName + '" ' + lastName);
}

var shia = {
  nickName: "Do it!"
};

var ian = {
  nickName: "It's a great big world"
};

var chad = {
  nickName: "I just wanna be a rockstar!"
};

var christina = {
  nickName: "I'm giving up on you."
};
