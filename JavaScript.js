//we make a function where we return 3 different strings

/* fucntion for computer to choose random array for the game */

let playerScore = 0;
let computerScore = 0;
let winner = "";


const choices = ["paper", "rock", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const result = getComputerChoice(choices);

/* here i made 1 round for the rock for a draw, win and lose
it picks random as a pc and fights with plkayer's "rock" */
let answer = prompt("What's ur answer?");

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (answer === playerSelection && answer === computerSelection) {
        winner = "Its a tie!";
    } else if ( answer === playerSelection &&
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerScore++
        winner = "player";
    } else {
        computerScore++
        winner = "computer";
    }
}


const computerChoice = getComputerChoice(choices);
const roundResult = playRound(answer, computerChoice);
console.log(roundResult);
