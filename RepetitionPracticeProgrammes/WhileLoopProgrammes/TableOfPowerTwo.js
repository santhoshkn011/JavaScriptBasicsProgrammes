/*
Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached..
*/
console.log("Priniting the table of 2 till given power");

let result;
let i = 1;
while(result != 256)
{
    result = Math.pow(2,i);
    console.log("2^"+i+": "+result);
    i++;
}