const prompt=require("prompt-sync")();
console.log("welcome to the Asp.net core test");
const question1=prompt("what is the Kestrel ?");
const answer1="web server";


if(question1.toLowerCase()=== answer1)
   console.log("yeah you got it correct ! ");
else{
    console.log("no you got is wrong !" );
}
 const question2=prompt("Is Liskov one of the SOLID principles ?");
 const answer2="yes";
 
if(question2.toLowerCase()=== answer2)
console.log("yeah you got it correct ! ");
else{
 console.log("no you got is wrong !" );
}
const question3=prompt("Is C# is compiled or interpreted language ?");
 const answer3="compiled language";
 
if(question3.toLowerCase()=== answer3)
console.log("yeah you got it correct ! ");
else{
 console.log("no you got is wrong !" );
}