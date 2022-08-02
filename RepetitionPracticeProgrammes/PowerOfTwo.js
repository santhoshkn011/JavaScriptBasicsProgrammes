/* Write a program that takes a command-line argument n and prints a table of the powers of 2 
that are less than or equal to 2^n.
*/
const readline = require("readline-sync");
let power = parseInt(readline.question("Enter the power : "))
let result=1;
console.log("Pinting powers of 2: ");
for(let i = 1; i <= power; i++){
    result=result*2; 
    console.log("2^"+i+": "+result);   
}
