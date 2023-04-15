let playerName = prompt("Hello! Welcome to Rock Paper Scissors. What's your name?");

alert(`Nice to meet you ${playerName}! I hope you have fun with our game!`);

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

getComputerChoice();

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

function playGame() {
  let playerChoice = prompt("Please select between Rock, Paper or Scissors:");
  playerChoice = playerChoice.toLowerCase();

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

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log(`Player won! ${playerChoice} beats ${computerChoice}.`);
      return playerWinCount += 1;
    } else if (computerChoice === "paper") {
      console.log("It's a tie.");
      return tieCount += 1;
    } else if (computerChoice === "scissors") {
      console.log(`Player lost! ${computerChoice} beats ${playerChoice}.`);
      return computerWinCount += 1;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log(`Player lost! ${computerChoice} beats ${playerChoice}.`);
      return computerWinCount += 1;
    } else if (computerChoice === "paper") {
      console.log(`Player won! ${playerChoice} beats ${computerChoice}.`);
      return playerWinCount += 1;
    } else if (computerChoice === "scissors") {
      console.log("It's a tie.");
      return tieCount += 1;
    }
  }

  console.log("You didn't choose a valid option, so that will count as a loss!");
  computerWinCount += 1;
}

playGame();
