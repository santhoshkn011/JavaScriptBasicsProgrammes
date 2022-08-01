let min = 100;
let max = 999;
let num1 = Number = Math.floor(Math.random() * (max-min+1)+min);
let num2 = Number = Math.floor(Math.random() * (max-min+1)+min);
let num3 = Number = Math.floor(Math.random() * (max-min+1)+min);
let num4 = Number = Math.floor(Math.random() * (max-min+1)+min);
let num5 = Number = Math.floor(Math.random() * (max-min+1)+min);
console.log("The Random Five 3 digit Numbers are: "+num1+", "+num2+", "+num3+", "+num4+", "+num5);
min = num1; //initially the min number is num1
if (num2 < min) {min = num2};
if (num3 < min) {min = num3};
if (num4 < min) {min = num4};
if (num5 < min) {min = num5};
console.log("Minimum number is = " + min);
max = num1; //initially the max number is num1
if (num2 > max) {max = num2};
if (num3 > max) {max = num3};
if (num4 > max) {max = num4};
if (num5 > max) {max = num5};
console.log("Maximum number is = " + max);
