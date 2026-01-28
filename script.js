// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// Use math.random() and use if else statements to make .0-.33 rock, .34-.66 paper, and .67-.99 scissors

function getComputerChoice() {
    const R = Math.random();
    if (R<1/3) {return "rock";}
    else if (R<2/3) {return "paper";}
    else {return "scissors";}
}


//The game will be played by a human player. You will write a function that takes the user choice and returns it.

function getHumanChoice () {
    const user=prompt("Please enter Rock, Paper, or Scissors")
    return user.toLowerCase()
}


let humanScore=0
let computerScore=0

//Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

let humanPick=getHumanChoice();
let computerPick=getComputerChoice();


function playRound(humanPick, computerPick) {

    if (humanPick===computerPick) return "It's a Tie!";
    else if (
        (humanPick==="rock"&&computerPick==="scissors")||
        (humanPick==="paper"&&computerPick==="rock")||
        (humanPick==="scissors"&&computerPick==="paper")
    ) {
        humanScore+=1;
        return "You Win!"
    }
    else {computerScore+=1; 
        return "You Lose this one!"}
}


console.log(playRound(humanPick,computerPick))
console.log(humanScore)
console.log(computerScore)