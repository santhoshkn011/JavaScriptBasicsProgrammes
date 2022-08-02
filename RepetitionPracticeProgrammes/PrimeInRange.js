//Extend the program to take a range of number as input and output the Prime Numbers in that range.
const readline = require("readline-sync");
let lowerNumber = parseInt(readline.question("Enter the lower bound: "))
let higherNumber = parseInt(readline.question("Enter the Upper bound: "))
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let count = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && count == 0) {
        console.log(i);
    }
}