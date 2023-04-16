const playerName = prompt("Hello! Welcome to Rock Paper Scissors. What's your name?");

alert(`Nice to meet you ${playerName}!\nThis will be a best out of five match.\nThe rules are very simple:`);
alert("Rock beats scissors;\nPaper beats rock;\nScissors beats paper.\nFirst to three wins! Have fun!");

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

let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

function playGame() {
  let playerChoice = prompt("Please select between Rock, Paper or Scissors:");
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nThis game was a draw!`);
      return drawCount++;
    } else if (computerChoice === "paper") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nYou LOST this game!`);
      return computerWinCount++;
    } else if (computerChoice === "scissors") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nYou WON this game!`);
      return playerWinCount++;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nYou WON this game!`);
      return playerWinCount++;
    } else if (computerChoice === "paper") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nThis game was a draw!`);
      return drawCount++;
    } else if (computerChoice === "scissors") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nYou LOST this game!`);
      return computerWinCount++;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nYou LOST this game!`);
      return computerWinCount++;
    } else if (computerChoice === "paper") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nYou WON this game!`);
      return playerWinCount++;
    } else if (computerChoice === "scissors") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\nThis game was a draw!`);
      return drawCount++;
    }
  }

  alert("Invalid choice. Please choose again.");
  return;
}

for (; playerWinCount < 3 || computerWinCount < 3;) {
  if (playerWinCount === 0 && computerWinCount === 0 && drawCount === 0) {
    alert("This is your first game in the best out of five! Good luck!");
  } else if (playerWinCount === 2 || computerWinCount === 2) {
    alert("This might be the last game, choose carefully!");
  }
  getComputerChoice();
  playGame();
}

showResults();

function showResults() {
  alert(`The match is over! Here's the results:\n${playerName}: ${playerWinCount} wins.\nComputer: ${computerWinCount} wins.\nDraws: ${drawCount}.`);
  
  if (playerWinCount > computerWinCount) {
    alert("Congratulations! You WON!")
  } else  if (playerWinCount < computerWinCount) {
    alert("You LOSE! Better luck next time!")
  } else {
    alert("The game ended in a DRAW!")
  }
}