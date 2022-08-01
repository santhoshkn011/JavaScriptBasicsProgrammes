//Read a single digit number and write the number in word
const readline = require("readline-sync");
let number = parseInt(readline.question("Enter the single digit number: "));
if(number == 0 ){
    console.log("The number is ZERO");
}else if(number == 1){
    console.log("The number is ONE");
}else if(number == 2){
    console.log("The number is TWO");
}else if(number == 3){
    console.log("The number is THREE");
}else if(number == 4){
    console.log("The number is FOUR");
}else if(number == 5){
    console.log("The number is FIVE");
}else if(number == 6){
    console.log("The number is SIX");
}else if(number == 7){
    console.log("The number is SEVEN");
}else if(number == 8){
    console.log("The number is EIGHT");
}else if(number == 9){
    console.log("The number is NINE");
}else{
    console.log("Enterd invalid number.")
}