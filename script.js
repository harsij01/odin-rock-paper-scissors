function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];

    const choice = choices[Math.floor(Math.random() * choices.length)];

    return choice;
}

console.log(getComputerChoice());