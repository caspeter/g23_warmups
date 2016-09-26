function answer(numbers){
  //renamed because numbers is confusing
  var listOfPirates = numbers;
  var isFirstPirateInLoop = false;

  //Constants
  var FIRSTPIRATE = 0;
  var MINPIRATES = 2;
  var MAXPIRATES = 5000;

  //returns true if the input array is within the bounds (pirates can't send to themselves, the list of pirates must be at least 2 and must not exceed 5000)
  var isValidInput = function(array){
    return array.every(function(curr,index){
      return (curr !== index);
    }) && array.length >= MINPIRATES && array.length <= MAXPIRATES;
  }

  // the first pirate is in the loop only if another pirate who is also in the loop redirects to him/her
  var handleFirstPirate = function() {
    if (listOfPirates.indexOf(FIRSTPIRATE) != -1) {
      var sender = listOfPirates.indexOf(FIRSTPIRATE);
      if(listOfPirates.indexOf(sender) != -1){
        isFirstPirateInLoop = true;
      }
    }
    return;
  }
  //Returns true if any pirate redirects to pirate in question.
  var isInLoop = function(redirectsTo,pirate,listOfPirates){
    if (pirate === FIRSTPIRATE){
      return isFirstPirateInLoop;
    }
    return listOfPirates.indexOf(pirate) != -1;
  }

  if(!isValidInput(listOfPirates)){
    return "Invalid Input";
  };

  handleFirstPirate();
  var piratesInLoop = listOfPirates.filter(isInLoop);
  return piratesInLoop.length;
}


  console.log(answer([1,0])); //2
  console.log(answer([1,2,1])); //2
  console.log(answer([1,3,0,1])); //2
  console.log(answer([2,1,3,2])); //Invalid Input
  console.log(answer([2,2,4,4,0])); //3
  console.log(answer([2,3,1,4,5,0])); //6
  console.log(answer([1,3,0,2])); //4
  console.log(answer([2, 3, 1, 5, 0, 2])); //4
