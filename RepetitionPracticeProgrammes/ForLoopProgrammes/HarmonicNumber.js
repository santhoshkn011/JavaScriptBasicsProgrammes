//Write a program that takes a command-line argument n and prints the nth harmonic number.

const readline = require("readline-sync");
let n = parseInt(readline.question("Enter the number(n): "))
let harmonicNumber = 1;
//we can use process.stdout.write() method to print to console without trailing newline.
process.stdout.write("1");
for(i=1; i<=n; i++){
    process.stdout.write(" + 1/"+i);
    harmonicNumber += 1/i;
}
console.log("\n"+n+" Harmonic Number is "+harmonicNumber);