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

const rockChoice = document.querySelector('#rockChoice');
const paperChoice = document.querySelector('#paperChoice');
const scissorsChoice = document.querySelector('#scissorsChoice');

let playerChoice;

rockChoice.addEventListener('click', () => playerChoice = 'rock');
paperChoice.addEventListener('click', () => playerChoice = 'paper');
scissorsChoice.addEventListener('click', () => playerChoice = 'scissors');

const computerChoiceImg = document.querySelector('#computerChoiceImg');

let computerChoice;
function getComputerChoice() {
  let getComputerRandomValue = Math.floor(Math.random() * 3);
  if (getComputerRandomValue === 0) {
    computerChoiceImg.removeAttribute('src');
    computerChoiceImg.setAttribute('src', '/images/rock.jpg');
    return computerChoice = "rock";
  } else if (getComputerRandomValue === 1) {
    computerChoiceImg.removeAttribute('src');
    computerChoiceImg.setAttribute('src', '/images/paper.jpg');
    return computerChoice = "paper";
  } else {
    computerChoiceImg.removeAttribute('src');
    computerChoiceImg.setAttribute('src', '/images/scissors.jpg');
    return computerChoice = "scissors";
  }
}

let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

const playerChoiceTitle = document.querySelector('.playerChoiceTitle');

function playGame() {

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      playerChoiceTitle.textContent = 'This round was a DRAW';
      return drawCount++;
    } else if (computerChoice === "paper") {
      playerChoiceTitle.textContent = 'You LOST this round';
      return computerWinCount++;
    } else if (computerChoice === "scissors") {
      playerChoiceTitle.textContent = 'You WON this round';
      return playerWinCount++;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      playerChoiceTitle.textContent = 'You WON this round';
      return playerWinCount++;
    } else if (computerChoice === "paper") {
      playerChoiceTitle.textContent = 'This round was a DRAW';
      return drawCount++;
    } else if (computerChoice === "scissors") {
      playerChoiceTitle.textContent = 'You LOST this round';
      return computerWinCount++;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      playerChoiceTitle.textContent = 'You LOST this round';
      return computerWinCount++;
    } else if (computerChoice === "paper") {
      playerChoiceTitle.textContent = 'You WON this round';
      return playerWinCount++;
    } else if (computerChoice === "scissors") {
      playerChoiceTitle.textContent = 'This round was a DRAW';
      return drawCount++;
    }
  }
}
/*
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

*/