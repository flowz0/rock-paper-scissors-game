function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];

    return options[Math.floor(Math.random() * options.length)];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
    if (player === "Rock" && computer === "Scissors") {
        return true;
    } else if (player === "Scissors" && computer === "Paper") {
        return true;
    } else if (player === "Paper" && computer === "Rock") {
        return true;
    } else {
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();

    // if player wins
    //  playerScore + 1
    //  return player wins

    // if computer and player choose same options
    //  return tie

    // if computer wins
    //  computerScore + 1
    //  return computer wins

    if (hasPlayerWonTheRound()) {
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}`;
    } else if (!hasPlayerWonTheRound()) {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }

}

