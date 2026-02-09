function getComputerChoice(choices) {
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function getHumanChoice(choices) {
    const userChoice = prompt("Choice:").toLowerCase();

    if (choices.includes(userChoice)) {
        return userChoice;
    }
}

function playGame() {
    const choices = ["rock", "paper", "scissors"];

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                console.log("It's a Tie!");
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
                humanScore++;
            } else if (computerChoice == "paper") {
                console.log("It's a Tie!");
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper");
                humanScore++;
            } else if (computerChoice == "scissors") {
                console.log("It's a Tie!");
            }
        }
    }

    playRound(getHumanChoice(choices), getComputerChoice(choices));
    playRound(getHumanChoice(choices), getComputerChoice(choices));
    playRound(getHumanChoice(choices), getComputerChoice(choices));
    playRound(getHumanChoice(choices), getComputerChoice(choices));
    playRound(getHumanChoice(choices), getComputerChoice(choices));

    if (humanScore > computerScore) {
        console.log("You Win!")
    } else if (humanScore < computerScore) {
        console.log("You lose!")
    } else {
        console.log("It's a Tie!")
    }
}

playGame();