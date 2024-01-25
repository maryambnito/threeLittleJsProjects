const prompt=require("prompt-sync")();
const target=Math.round(Math.random()*100);
let guesses=0;
console.log(target);
while(true){
    
    const guess=Number(prompt("Guess Your Number: "));
    if(guess>target){
console.log("your number is high!");
guesses++;
continue;
    }else if(guess<target){

        console.log("your number is low!");
guesses++;
        
        continue;
    }
    console.log("you guessed ! ");
    break;
}
console.log(`you guessed ${guesses} number `);