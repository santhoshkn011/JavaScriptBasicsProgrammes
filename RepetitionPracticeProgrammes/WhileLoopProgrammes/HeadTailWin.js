// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

console.log("Flip the coin")
let win = 0;
let headCount = 0;
let tailCount = 0;
while(win != 11){
    let flipCoin = Math.floor((Math.random())*2);
    if(flipCoin ==0 ){
        console.log("Head");
        headCount++;
        if(headCount==11){
            console.log("\nHEAD Wins!!!")
            win = headCount;
        }
    }
    else{
        console.log("Tail");
        tailCount++;
        if(tailCount==11){
            console.log("\nTAIL Wins!!!")
            win = tailCount;
        }
    }  
}