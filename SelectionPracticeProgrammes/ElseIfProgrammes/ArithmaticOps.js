//Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
//        1. a + b * c        3. c + a / b
//        2. a % b + c        4. a * b + c

let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

console.log("The numbers are \na:",a + ", b: " + b + ", c: " + c);
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;
console.log("\na + b * c : "+result1+"\na % b + c : "+result2+"\nc + a / b : "+result3+"\na * b + c : "+result4)

let minimumResult = 0;
let maximumResult = 0;

//calculation of max result
if (result1 < result2 && result1 < result3 && result1 < result4) {
    minimumResult = result1;
} else if (result2 < result3 && result2 < result4) {
    minimumResult = result2;
} else if (result3 < result4) {
    minimumResult = result3;
} else {
    minimumResult = result4;
}
console.log("\nminimum result is: " + minimumResult);

//calculation of min result
if (result1 > result3 && result1 > result4 && result1 > result2) {
    maximumResult = result1;
} else if (result2 > result3 && result2 > result4 ) {
    maximumResult = result2;
} else if (result3 > result4) {
    mmaximumResultax = result3;
} else {
    maximumResult = result4;
}

console.log("Maximum result is: " + maximumResult);