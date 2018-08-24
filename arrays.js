
/*
it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
  expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
})
*/

/*
var chocolateBars = new Array();

chocolateBars.push("snickers");
chocolateBars.push("hundred grand");
chocolateBars.push("kitkat");
chocolateBars.push("skittles");
*/
//var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.shift(element)
  return array
}
