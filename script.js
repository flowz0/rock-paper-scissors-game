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

