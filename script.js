// Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
// use math.random() and use if else statements to make .0-.33 rock, .34-.66 paper, and .67-.99 scissors

function getComputerChoice() {
    const R = Math.random();
    if (R<1/3) {return "rock";}
    else if (R<2/3) {return "paper";}
    else {return "scissors";}
}

console.log(getComputerChoice())