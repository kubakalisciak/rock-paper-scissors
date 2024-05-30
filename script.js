console.log('Hello World!')

function getComputerChoice () {
    const rand = Math.floor((Math.random()*3)+ 1)
    let choice = "";

    switch (rand) {
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "paper"
            break;
        case 3:
            choice = "scissors"
            break;

        }
    
    return choice;
}

console.log(getComputerChoice())