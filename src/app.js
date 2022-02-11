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
  //assign var to track total cost
  let cost = 0;

  //loop over array on inputs to validate if valid
  for (let i = 0; i < input.length; i++) {
    //while looping sum the total inouts value
    cost += parseFloat(input[i].value);
    //check for expected type
    if (
      input[i].type !== "Truck" &&
      input[i].type !== "Trailer" &&
      input[i].type !== "Tractor"
    ) {
      return false;
    }
    if (
      //check for expected years
      parseInt(input[i].year) > 2022 ||
      parseInt(input[i].year) < parseInt(expectedOldestYear)
    ) {
      return false;
    }
    //check for single input cost too high
    if (parseFloat(input[i].value) > parseFloat(expectedCost)) {
      return false;
    }
    //final check if we made it here just need to see if cost is more than expected
    if (parseFloat(cost) < parseFloat(expectedCost)) {
      return false;
    }
    //if it hasnt hit a return by here we are good to go
    return true;
  }
}

/**
 * Prompt: Implement a few tests to validate that your function works as expected
 */
function testIsValid() {
  // Your code here
  //first test all valid arguments
  console.log(
    "EXPECTED: TRUE",
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
      ],
      500,
      1970
    )
  );
  //second test type invalid
  console.log(
    "EXPECTED: FALSE",
    isValid(
      [
        {
          type: "Ford",
          year: 2000,
          value: 200,
        },
      ],
      500,
      1980
    )
  );
  //third test year is invalid
  console.log(
    "EXPECTED: FALSE",
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
      ],
      500,
      1999
    )
  );
  //4th test value too high
  console.log(
    "EXPECTED: FALSE",
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 2000,
        },
      ],
      500,
      1970
    )
  );
  //test 5 mulptiple valid inputs
  console.log(
    "EXPECTED: TRUE",
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
      ],
      5000,
      1970
    )
  );
  //test 6 mulptiple inputs with middle invalid
  console.log(
    "EXPECTED: FALSE",
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
        {
          type: "Ford",
          year: 1989,
          value: 200,
        },
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
      ],
      5000,
      1970
    )
  );
  //test 7 all valid inputs but final cost too high
  console.log(
    "EXPECTED: FALSE",
    isValid(
      [
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
        {
          type: "Truck",
          year: 1989,
          value: 200,
        },
      ],
      500,
      1970
    )
  );
}

testIsValid();
