const playerName = prompt("Hello! Welcome to Rock Paper Scissors. What's your name?");

alert(`Nice to meet you ${playerName}! The rules are very simple:`);
alert("Rock beats scissors;\nPaper beats rock;\nScissors beats paper.\nHave fun!");

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
      alert("It's a draw.");
      return drawCount++;
    } else if (computerChoice === "paper") {
      alert("You lost! Paper beats rock.");
      return computerWinCount++;
    } else if (computerChoice === "scissors") {
      alert("You won! Rock beats scissors.");
      return playerWinCount++;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      alert("You won! Paper beats rock.");
      return playerWinCount++;
    } else if (computerChoice === "paper") {
      alert("It's a draw.");
      return drawCount++;
    } else if (computerChoice === "scissors") {
      alert("You lost! Scissors beats paper.");
      return computerWinCount++;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      alert("You lost! Rock beats Scissors.");
      return computerWinCount++;
    } else if (computerChoice === "paper") {
      alert("You won! Scissors beats Paper.");
      return playerWinCount++;
    } else if (computerChoice === "scissors") {
      alert("It's a draw.");
      return drawCount++;
    }
  }

  alert("Invalid choice, so that will count as a loss.");
  computerWinCount++;
}

for (let i = 0; i < 5; i++) {
  if (i === 0) {
    alert("This is your first game out of five! Good luck!");
  } else if (i === 4) {
    alert("This is your last game, choose carefully!");
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