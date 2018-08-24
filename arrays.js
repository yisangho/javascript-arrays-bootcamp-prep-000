
/*
it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
  expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
})
*/
var chocolateBars = new Array();

chocolateBars.push("snickers");
chocolateBars.push("hundred grand");
chocolateBars.push("kitkat");
chocolateBars.push("skittles");


console.log(chocolateBars[0]);

function addElementToBeginningOfArray(array, element) {

  return [element ...array]

}
