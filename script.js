console.log('Hello World!');

let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    const rand = Math.floor((Math.random() * 3)) + 1;
    let computerChoice = '';

    switch (rand) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;

        }

    return computerChoice;
}

function playOnce(computer, human) {
    if (computer == 'scissors' && human == 'rock') {
        resultDisplay.textContent = "You win! Rock beats scissors!";
        humanScore++;
    }
    else if (computer == 'scissors' && human == 'paper') {
        resultDisplay.textContent = "You lose! Scissors beat paper!";
        computerScore++;
    }
    else if (computer == "rock" && human == "paper") {
        resultDisplay.textContent = "You win! Paper beats rock!";
        humanScore++;
    }
    else if (computer == 'rock' && human == 'scissors') {
        resultDisplay.textContent = "You lose! Rock beats scissors!";
        computerScore++;
    }
    else if (computer == "paper" && human == "scissors") {
        resultDisplay.textContent = "You win! Scissors beat paper!";
        humanScore++;
    }
    else if (computer == "paper" && human == "rock") {
        resultDisplay.textContent = "You lose! Paper beats rock!";
        computerScore++;
    }
    else if (computer == human) {
        resultDisplay.textContent = "It's a tie!";
    }

    computerScoreDisplay.textContent = computerScore;
    humanScoreDisplay.textContent = humanScore;

    if (computerScore == 5) {
        winnerDisplay.textContent = "You lost! Reset to play a new game";
    }
    else if (humanScore == 5) {
        winnerDisplay.textContent = "You won! Reset to play a new game";
    }
}

let resultDisplay = document.querySelector('#result');
let computerScoreDisplay = document.querySelector('#computer');
let humanScoreDisplay = document.querySelector('#human');
let winnerDisplay = document.querySelector('#winner');

let rockB = document.querySelector('#rockB');
rockB.onclick = () => {
    playOnce(getComputerChoice(), 'rock');
}
let paperB = document.querySelector('#paperB');
paperB.onclick = () => {
    playOnce(getComputerChoice(), 'paper');
}
let scissorsB = document.querySelector('#scissorsB');
scissorsB.onclick = () => {
    playOnce(getComputerChoice(), 'scissors');
}
let resetB = document.querySelector('#resetB');
resetB.onclick = () => {
    computerScore = 0;
    humanScore = 0;
    resultDisplay.textContent = "";
    computerScoreDisplay.textContent = "0";
    humanScoreDisplay.textContent = "0";
    winnerDisplay.textContent = "";
}