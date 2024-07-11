let score = 0;
let user;
let round = 1;
let chance = 0;


let words = ["Snake" , "Water" , "Gun"];
let randm = words[Math.floor(Math.random()*words.length)];

console.log(randm);
while(round <= 3){
user = prompt("Enter a word: ");
if(user ==  randm){
    console.log("Draw!!")
    console.log(randm);
    chance++;
}else if(user == "Snake" && randm == "Water") {
    console.log("User wins!!")
    console.log(randm);
    score++;
    chance++;
}else if(user == "Water" && randm == "Snake") {
    console.log("Computer wins!!")
    console.log(randm);
    chance++;
}else if(user == "Gun" && randm == "Water") {
    console.log("Computer wins!!");
    console.log(randm);
    chance++;
}else if(user == "Water" && randm == "Gun") {
    console.log("User wins!!")
    console.log(randm);
    score++;
    chance++;
}else if(user == "Gun" && randm == "Snake") {
    console.log("User wins!!")
    console.log(randm);
    score++;
    chance++;
}else if(user == "Snake" && randm == "Gun") {
    console,log("Computer wins!!")
    console.log(randm);
    chance++;
}else{
    console.log("Wrong input");
    console.log(randm);
}
if(chance == 5) {
    break;
 }
};

console.log("Your score is",score);
console.log(`You takes ${chance}  chances!!`);
