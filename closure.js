function noClosure(){

  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
}

// noClosure();

function withLet(){

  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
}

// withLet();

function testClosure(){

  for (var i = 0; i < 10; i++) {
    var closureFn = function(i){
      setTimeout(function() {
        console.log(i);
      }, 10);
    }
    closureFn(i);
  }
}

// testClosure();

function withForEach(){
  var array = [1,2,3,4,5,6,7,8,9,10];
  array.forEach(function(element){setTimeout(function(){
    console.log(element);
  }, 10);})
}

// withForEach();

function testClosureBind(){

  for (var i = 0; i < 10; i++) {
    var closureFn = function(i){
      setTimeout(function() {
        console.log(i);
      }.bind(this,i), 10);
    }
    closureFn(i);
  }
}

testClosureBind();
