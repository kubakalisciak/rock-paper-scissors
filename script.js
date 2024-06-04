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
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper or scissors? ');
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

function playOnce(computer, human) {

    if (computer == 'scissors' && human == 'rock') {
        alert('You win! Rock beats scissors!');
        humanScore++;
    }
    else if (computer == 'scissors' && human == 'paper') {
        alert('You lose! Scissors beat paper!');
        computerScore++;
    }
    else if (computer == "rock" && human == "paper") {
        alert('You win! Paper beats rock!');
        humanScore++;
    }
    else if (computer == 'rock' && human == 'scissors') {
        alert('You lose! Rock beats scissors!');
        computerScore++;
    }
    else if (computer == "paper" && human == "scissors") {
        alert("You win! Scissors beat paper!");
        humanScore++;
    }
    else if (computer == "paper" && human == "rock") {
        alert("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (computer == human) {
        alert("It's a tie!")
    }
}

function playGame () {
    playOnce(getComputerChoice(), getHumanChoice());
    playOnce(getComputerChoice(), getHumanChoice());
    playOnce(getComputerChoice(), getHumanChoice());
    playOnce(getComputerChoice(), getHumanChoice());
    playOnce(getComputerChoice(), getHumanChoice());    

    alert("THE END! Your score will be announced!")

    if (computerScore > humanScore) {
        alert(`You lose! ${humanScore} : ${computerScore}`);
    }
    else if (humanScore > computerScore) {
        alert(`You win! ${humanScore} : ${computerScore}`);
    }
    else {
        alert(`It's a tie! ${humanScore} : ${computerScore}`);
    }
}

playGame();
