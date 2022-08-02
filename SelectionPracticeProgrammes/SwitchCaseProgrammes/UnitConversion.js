/*
Write a program that takes User Inputs and does Unit Conversion of different Length units
  1. Feet to Inch      3. Inch to Feet
  2. Feet to Meter     4. Meter to Feet
*/

const readline = require("readline-sync");
console.log("1. Feet to Inch \t2. Feet to Meter \n3. Inch to Feet \t4. Meter to Feet");

let option = parseInt(readline.question("Enter Option: "));
let number;
let result;

switch (option){
    case 1:
        console.log("Feet to Inch");
        number = parseInt(readline.question("Enter Number of Feets : "));
        result = number * 12;
        console.log("Inches : ",result);
        break;
    case 2:
        console.log("Feet to Meter");
        number = parseInt(readline.question("Enter Number of Feets : "));
        result = number * 0.3048;
        console.log("Meters : ",result);
        break;
    case 3:
        console.log("Inch to Feet");
        number = parseInt(readline.question("Enter Number of Inches : "));
        result = number * 0.0833333;
        console.log("Feets : ",result);
        break;
    case 4:
        console.log("Meter to Feet");
        number = parseInt(readline.question("Enter Number of Meteres: "));
        result = number * 3.28084
        console.log("Feets : ",result);
        break;
    default :
        console.log("Wrong input");                                                                               
}