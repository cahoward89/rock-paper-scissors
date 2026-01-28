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

//I don't want these to run outside of my gameloop

//let humanPick=getHumanChoice();
//let computerPick=getComputerChoice();

//

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


// Your game will play 5 rounds, keep track of the scores and declare a winner at the end.

function playGame (){
    for (let i = 0; i < 5; i++) {

        let humanPick=getHumanChoice();
        let computerPick=getComputerChoice();
        let result=playRound(humanPick,computerPick)

        
        console.log("You chose " + humanPick)
        console.log("The computer chose " + computerPick)
        console.log(result)
        console.log("Your Score:" + humanScore)
        console.log("Computer Score:"+computerScore)
        console.log("-------------------------")
    }

    if (humanScore>computerScore) {console.log("You are the Winner! Great Job!");}
    else if (computerScore>humanScore) {console.log("The computer Wins! Better luck next time!")}
    else {console.log("The game ends in a tie.")}
}

playGame()