module.exports = {
  swap,
  swapEs6,
  logEachElement,
  logEachElementEs6,
  useArrows,
  useArrowsEs6,
  printString,
  printStringEs6,
  makeObj,
  makeObjEs6,
  ObjProperties,
  ObjPropertiesEs6
}

// refactor this to use the es6 destructuring syntax (hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
//x and y are index numbers, this function swaps the values at those indexes
function swap(arr,x,y){
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function swapEs6(arr,x,y){
  [arr[x], arr[y]] = [arr[y], arr[x]];
}


//refactor this to use es6 for...of syntax
function logEachElement(array){
  var result = []
  for (var i = 0; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

function logEachElementEs6(array){
  var result = [];
  for (let element of array) {
    result.push(element);
  }
  return result;
}


//refactor this to use es6 arrow function
function useArrows(array){
  var result = array.map(function(element){
    return element * 2;
  });

  return result;
}

function useArrowsEs6(array){
  var result = array.map(element => element * 2);
  return result;
}

//refactor this to use the backticks for string interpolation
function printString(name,greeting){
  return name + ' says "' + greeting +'"';
}

function printStringEs6(name,greeting){
  return `${name} says "${greeting}"`;
}

printString('Teddi', 'How are you?');
printStringEs6('Teddi', 'How are you?');

//refactor this to  be more concise by using new es6 syntax for 'computed property names'
function makeObj(val1,val2){
  var num = val1 + val2;
  var myObj = {};
  myObj[num] = 'Shayna';
  return myObj;
}

function makeObjEs6(val1,val2){
  var myObj2 = {[val1 + val2]: 'Shayna'}

  return myObj2;
}


//refactor this to be more concise by using new es6 syntax (hint https://ariya.io/2013/02/es6-and-object-literal-property-value-shorthand)
function ObjProperties(name, grade, favColor) {
	return {
		name: name,
		grade: grade,
		favColor: favColor
	};
}

function ObjPropertiesEs6(name, grade, favColor) {
	return {
    name,
    grade,
    favColor
	};
}
