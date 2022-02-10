/**
 * Prompt: Implement a function that validates that the input Vehicles have the
 * following shape and all numbers will be sensible integers.
 * 
 * interface Vehicle {
 *   type: 'Truck' | 'Trailer' | 'Tractor'
 *   year: number
 *   value: number
 * }
 * 
 * @param {Vehicle[]} input 
 * @param {number} expectedCost The expected sum cost of all vehicles passed in
 * @param {number} expectedOldestYear The expected minimum year of all vehicles passed in
 * @return {boolean} A boolean indicating whether input matches expected{Cost,Year}
 */
function isValid (input, expectedCost, expectedOldestYear) {
  // Your code here
  let cost 
  
  // compare each inputs and make sure they have all 
  //fields set and all numbers are sensible i.e year xxxx 
input.forEach(input => {
  if (input.type !== 'Truck' | 'Trailer' | 'Tractor') {
    return false
  } else if (parseInt(input.year) > 2022 || parseInt(input.year) < parseInt(expectedOldestYear) ) {
    return false
  } else if (parseFloat(input.value) > parseFloat(expectedCost)) {
    return false
  }
  return input
})
  //if the input is valid sum the value of each car and compare to expectedCost
  if (input) {
   for (let i = 0 ; i > input.length; i++) {
     cost += input.value 
     if (cost > expectedCost) {
       return false
     }
   } 
   return true 
  }
}


/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid () {
  // Your code here
  
}