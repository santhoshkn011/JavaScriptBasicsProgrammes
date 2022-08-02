//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const readline = require("readline-sync");
let unit = parseInt(readline.question("Enter the number(1, 10, 100, 1000): "))

switch (unit){
    case 1:
        console.log("Ones");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    default :
        console.log("Enter the correct unit number");                                                                               
}