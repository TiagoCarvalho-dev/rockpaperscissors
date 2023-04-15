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

getComputerChoice();

let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;

function playGame() {
  let playerChoice = prompt("Please select between Rock, Paper or Scissors:");
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      alert("It's a tie.");
      return tieCount += 1;
    } else if (computerChoice === "paper") {
      alert(`You lost! ${computerChoice} beats ${playerChoice}.`);
      return computerWinCount += 1;
    } else if (computerChoice === "scissors") {
      alert(`You won! ${playerChoice} beats ${computerChoice}.`);
      return playerWinCount += 1;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      alert(`You won! ${playerChoice} beats ${computerChoice}.`);
      return playerWinCount += 1;
    } else if (computerChoice === "paper") {
      alert("It's a tie.");
      return tieCount += 1;
    } else if (computerChoice === "scissors") {
      alert(`You lost! ${computerChoice} beats ${playerChoice}.`);
      return computerWinCount += 1;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      alert(`You lost! ${computerChoice} beats ${playerChoice}.`);
      return computerWinCount += 1;
    } else if (computerChoice === "paper") {
      alert(`You won! ${playerChoice} beats ${computerChoice}.`);
      return playerWinCount += 1;
    } else if (computerChoice === "scissors") {
      alert("It's a tie.");
      return tieCount += 1;
    }
  }

  alert("You didn't choose a valid option, so that will count as a loss!");
  computerWinCount += 1;
}

for (let i = 0; i < 5; i++) {
  if (i === 0) {
    alert("This is your first game out of five! Good luck!");
  } else if (i === 4) {
    alert("This is your last game, choose carefully!");
  }
  
  playGame();
}

