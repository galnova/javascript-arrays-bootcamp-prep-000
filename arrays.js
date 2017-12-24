var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  var hardAr = ["foo", ...array];
  return hardAr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo");
  return array;
}

function addElementToEndOfArray(array, element) {
  var hardAr = [...array, "foo"];
  return hardAr;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.pop();
  return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.slice(1);
}