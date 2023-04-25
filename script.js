const button = document.querySelector('#submitButton');
const getPlayerName = document.querySelector('#getPlayerName');
const playerName = document.querySelector('#playerName');
const playerInfo = document.querySelector('.playerInfo');
const section2 = document.querySelector('.section2');
const welcomeMessage = document.querySelector('#welcomeMessage');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const section5 = document.querySelector('.section5');
const hidden = document.querySelector('.hidden');

button.addEventListener('click', () => {
  playerName.textContent = getPlayerName.value;
  section2.removeChild(playerInfo);
  welcomeMessage.textContent = "This will be a best out of five match. Whoever gets three wins first, wins. Have Fun!";
  section3.classList.remove('hidden');
  section4.classList.remove('hidden');
  section5.classList.remove('hidden');
});

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
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nThis game was a draw!`);
      return drawCount++;
    } else if (computerChoice === "paper") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nYou LOST this game!`);
      return computerWinCount++;
    } else if (computerChoice === "scissors") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nYou WON this game!`);
      return playerWinCount++;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nYou WON this game!`);
      return playerWinCount++;
    } else if (computerChoice === "paper") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nThis game was a draw!`);
      return drawCount++;
    } else if (computerChoice === "scissors") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nYou LOST this game!`);
      return computerWinCount++;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nYou LOST this game!`);
      return computerWinCount++;
    } else if (computerChoice === "paper") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nYou WON this game!`);
      return playerWinCount++;
    } else if (computerChoice === "scissors") {
      alert(`You chose ${playerChoice};\nComputer chose ${computerChoice};\n\nThis game was a draw!`);
      return drawCount++;
    }
  }

  alert("Invalid choice. Please choose again.");
  return;
}

for (; playerWinCount < 3 && computerWinCount < 3;) {
  if (playerWinCount === 0 && computerWinCount === 0 && drawCount === 0) {
    alert("This is your first game in the best out of five! Good luck!");
  } else if (playerWinCount === 2 && computerWinCount === 2){
    alert("This is the final game! Whoever wins is the champion!")
  } else if (playerWinCount === 2 || computerWinCount === 2) {
    alert("This might be the last game, choose carefully!");
  }
  getComputerChoice();
  playGame();
}

showResults();

function showResults() {
  alert(`The match is over! Here's the results:\n\n${playerName}: ${playerWinCount} wins.\nComputer: ${computerWinCount} wins.\nDraws: ${drawCount}.`);
  
  if (playerWinCount > computerWinCount) {
    alert("Congratulations! You WON!")
  } else {
    alert("You LOSE! Better luck next time!")
  }
}