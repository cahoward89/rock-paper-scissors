
function getComputerChoice() {
    const R = Math.random();
    if (R<1/3) {return "rock";}
    else if (R<2/3) {return "paper";}
    else {return "scissors";}
}



const buttons = document.querySelectorAll(".button-set button");
buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const humanPick = button.textContent.toLowerCase();
        let computerPick = getComputerChoice();
        playRound(humanPick,computerPick);
        updateComputerChoice(computerPick);
        updateScoreboard();
        if (humanScore==5) {console.log("You are the Winner! Great Job!")};
        if (computerScore==5) {console.log("The computer Wins! Better luck next time!")};
    })
})



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

let humanScore=0
let computerScore=0

let para = document.createElement("p");
para.textContent = `Your Score: ${humanScore} ||| Computer Score: ${computerScore}`
let scoreboard = document.querySelector(".scoreboard");
scoreboard.appendChild(para);

function updateScoreboard() {
  para.textContent = `Your Score: ${humanScore} ||| Computer Score: ${computerScore}`;
}


let computerChoice = document.createElement("p");
        scoreboard.appendChild(computerChoice);


function updateComputerChoice(computerPick){
    computerChoice.textContent = `The computer chose ${computerPick}`;
}






