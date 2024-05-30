console.log('Hello World!')

let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    const rand = Math.floor((Math.random()*3)+ 1)
    let computerChoice = "";

    switch (rand) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
            break;

        }
    
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Rock, paper or scissors? ')
    humanChoice = humanChoice.toLowerCase()

    return humanChoice;
}

console.log(getComputerChoice())
console.log(getHumanChoice())

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
        alert("You win! Scissors beat paper!")
        humanScore++;
    }
    else if (computer == "paper" && human == "rock") {
        alert("You lose! Paper beats rock!")
        humanScore++;
    }
    else if (computer == human == "rock" || computer == human == "paper" || computer == human == "scissors") {
        alert("It's a tie!")
    }
}