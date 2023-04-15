let playerName = prompt("Hello! Welcome to Rock Paper Scissors. What's your name?");

let playerChoice = alert(`Nice to meet you ${playerName}! I hope you have fun with our game!`);
playerChoice = playerChoice.toLowerCase();

getComputerChoice();

let computerChoice;
function getComputerChoice() {
  let getComputerRandomValue = Math.floor(Math.random() * 3);
  if (getComputerRandomValue === 0) {
    return computerChoice = "rock";
  } else if (getComputerRandomValue === 1) {
    return computerChoice = "paper";
  } else {
    return computerChoice = "scissors";
  }
}

playGame();

let playerWinCount;
let computerWinCount;
let tieCount;
function playGame() {
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      console.log("It's a tie.");
      return tieCount += 1;
    } else if (computerChoice === "paper") {
      console.log(`Player lost! ${computerChoice} beats ${playerChoice}.`);
      return computerWinCount += 1;
    } else if (computerChoice === "scissors") {
      console.log(`Player won! ${playerChoice} beats ${computerChoice}.`);
      return playerWinCount += 1;
    }
  }
}
