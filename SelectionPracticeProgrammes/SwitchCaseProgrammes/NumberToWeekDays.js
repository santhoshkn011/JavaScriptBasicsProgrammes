//Read a Number and Display the week day (Sunday, Monday,...)
const readline = require("readline-sync");

let number = parseInt(readline.question("Enter the number: "));

switch (number){
      case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Invalid Number");                                                                                                                                
}