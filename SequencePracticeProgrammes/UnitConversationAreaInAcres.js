let areaRectFt = 60*40; //Area of one plot
let areaRectMeters = areaRectFt/10.764; //area in Square meters
let areaOf25Plots = areaRectMeters * 25; //area of 25 plots in square meters
console.log("Area of 25 plots in SqMeters = " + areaOf25Plots);
let areaInAcre = areaOf25Plots/4047; //Converting SqMeters into Acres.
console.log("Area of 25 plots in acres = " + areaInAcre);