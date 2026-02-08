function getComputerChoice(choices) {
    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

function getHumanChoice(choices) {
    const userChoice = prompt("Choice:");

    if (choices.includes(userChoice)) {
        return userChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    
}

const choices = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;