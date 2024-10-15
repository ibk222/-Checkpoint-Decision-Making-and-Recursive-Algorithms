//Leap Year Checker: Create a function that takes a year as input and determines whether it is a leap year or not. Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.

// program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year = prompt("Enter a year:");

checkLeapYear(year);

//Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function myPowerFunction(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  const result = base * myPowerFunction(base, exponent - 1);
  return result;
}
const b = 2;
const e = 4;
console.log(
  `The recursively calculated value of ${b}^${e} is: ${myPowerFunction(b, e)}`
);
