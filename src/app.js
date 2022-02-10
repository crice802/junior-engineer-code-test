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
function isValid(input, expectedCost, expectedOldestYear) {
  // Your code here
  let cost = 0;

  for (let i = 0; i < input.length; i++) {
    cost += parseFloat(input[i].value);
    if (
      input[i].type !== "Truck" &&
      input[i].type !== "Trailer" &&
      input[i].type !== "Tractor"
    ) {
      return false;
    }
    if (
      parseInt(input[i].year) > 2022 ||
      parseInt(input[i].year) < parseInt(expectedOldestYear)
    ) {
      return false;
    }
    if (parseFloat(input[i].value) > parseFloat(expectedCost)) {
      return false;
    }
    if (cost > expectedCost) {
      return false;
    }
    return true;
  }
}

/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid() {
  // Your code here
  console.log(
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 2000,
        },
        {
          type: "Trailer",
          year: 1977,
          value: 200,
        },
      ],
      500,
      1970
    )
  );
  console.log(
    isValid(
      [
        {
          type: "Truck",
          year: 2000,
          value: 200,
        },
      ],
      500,
      1980
    )
  );
}

testIsValid();
