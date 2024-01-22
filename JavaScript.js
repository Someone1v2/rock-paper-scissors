let playerScore = 0;
let computerScore = 0;
let winner = "";
let answer;

const choices = ["paper", "rock", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();

    if (answer === playerSelection && answer === computerSelection) {
        winner = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        winner = "Player wins! ";
    } else {
        computerScore++;
        winner = "Computer wins! ";
    }

    updateResults();
}

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const resultsDiv = document.getElementById('results');

button1.addEventListener('click', function() {
    playRound("rock");
});

button2.addEventListener('click', function() {
    playRound("paper");
});

button3.addEventListener('click', function() {
    playRound("scissors");
});

function updateResults(){
    resultsDiv.innerText = `${winner}Player score: ${playerScore} | Computer score: ${computerScore}`

    if (playerScore === 5 || computerScore === 5){
        announceWinner()
    }
};

function announceWinner(){
    if(playerScore > computerScore){
        resultsDiv.innerText = `You win the game!`
    }
    else if(computerScore > playerScore){
        resultsDiv.innerText = `Computer wins the game!` 
    }
    else {
        resultsDiv.innerText = `It's a tie!`
    }
}

