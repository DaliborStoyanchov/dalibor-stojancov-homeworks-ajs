// TASK#01: Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

let userInputNumber = parseInt(
  prompt("Task 1 - Enter a nubmer larger than 0: ")
);

function calculateSumOfNumbers(inputNum) {
  if (inputNum < 0 || isNaN(inputNum)) {
    return "Error! The input is not a nubmer larger than 0.";
  }
  let result = 0;
  for (let i = 0; i <= inputNum; i++) {
    result += i;
  }
  return result;
}

console.log(calculateSumOfNumbers(userInputNumber));
console.log("________________________________________________________");

// TASK#02: Print all digits of a given number.

let userInputDig = parseInt(prompt("Task 2 - Enter a number: "));
const digitsArr = [];
while (userInputDig != 0) {
  digitsArr.push(userInputDig % 10);
  userInputDig = Math.trunc(userInputDig / 10);
}
digitsArr.reverse();
for (let i = 0; i < digitsArr.length; i++) {
  console.log(digitsArr[i]);
}

console.log("________________________________________________________");

// TASK#03: Change the character (-) of the members of the array let numArr = [4, -9, -98, -1, 444, 3, -555];.

let numArr = [4, -9, -98, -1, 444, 3, -555];
let numArrMap = numArr.map((x) => Math.abs(x));
console.log(numArrMap);

console.log("________________________________________________________");

// TASK#04: Copy the odd elements from the given one into a new array.
// Print the new one in the console. const givenArr = [12, 45, 88, 1, 567, 3, 91];.

const givenArr = [12, 45, 88, 1, 567, 3, 91];
let newArrOddElements = [];

for (const iterator of givenArr) {
  if (iterator % 2 !== 0) {
    newArrOddElements.push(iterator);
  }
}

console.log(newArrOddElements);

console.log("________________________________________________________");

// TASK#05: Delete all elements of the array except the numbers

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

for (let i = 0; i < test.length; i++) {
  if (typeof test[i] !== "number" || isNaN(test[i])) {
    delete test[i];
  }
}
test = test.filter((x) => x);
console.log(test);

console.log("________________________________________________________");
