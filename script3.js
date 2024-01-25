const prompt=require("prompt-sync")();
let wins=0;
let ties=0;
let losses=0;
while(true){

    const playerChoice=prompt("Enter rock,paper or scissors:(or enter q to quit) ");
    if(playerChoice==="q"){
        break;
    }
    if(playerChoice.toLowerCase()!=="rock"&&
    playerChoice.toLowerCase()!="paper"&&
    playerChoice.toLowerCase()!="scissors"){
        console.log("please enter a valid choice: ");
        continue;
    }

const choice=["rock","paper","scissors"];
const randomIndex=Math.round(Math.random()*2);
const computerChoice=choice[randomIndex];
console.log(`The Computer Chose: ${computerChoice} `);
if(computerChoice===playerChoice.toLowerCase()){
    console.log("Draw!");
    ties++;
}else if((computerChoice==="rock"&& playerChoice.toLowerCase()==="paper")||
(computerChoice==="scissors"&& playerChoice.toLowerCase()==="rock")||
(computerChoice==="paper"&& playerChoice.toLowerCase()==="scissors")){
    console.log("Won!");
    wins++;
}else{
    console.log("Lost!");
    losses++;
}
}
console.log(`Wins: ${wins},Losses:${losses},Draw:${ties}`);