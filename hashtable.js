var arr = [];

//given an input (key), give me the value associated with that key
//use only arrays

function Hashtable(){
  this.pairs = [];

  this.hash = function(key){
    
  }

  this.addPair = function(key,val){
    var arr = [];
    var hash = this.hash(key);
    arr.push(hash);
    arr.push(key);
    arr.push(val);

    this.pairs.push(arr);
    return "key, value pair added";
  }
}
