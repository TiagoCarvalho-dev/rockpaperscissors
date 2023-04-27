const submitButton = document.querySelector('#submitButton');
const getPlayerName = document.querySelector('#getPlayerName');
const playerName = document.querySelector('#playerName');
const playerInfo = document.querySelector('.playerInfo');
const section2 = document.querySelector('.section2');
const welcomeMessage = document.querySelector('#welcomeMessage');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const section5 = document.querySelector('.section5');
const hidden = document.querySelector('.hidden');

submitButton.addEventListener('click', () => {
  playerName.textContent = getPlayerName.value;
  section2.removeChild(playerInfo);
  welcomeMessage.textContent = "This will be a best out of five match. Whoever gets three wins first, wins. Have Fun!";
  section3.classList.toggle('hidden');
  section4.classList.toggle('hidden');
  section5.classList.toggle('hidden');
});

const rockChoice = document.querySelector('#rockChoice');
const paperChoice = document.querySelector('#paperChoice');
const scissorsChoice = document.querySelector('#scissorsChoice');

const playerChoiceTitle = document.querySelector('.playerChoiceTitle');
const computerChoiceImg = document.querySelector('#computerChoiceImg');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerChoiceContainer = document.querySelector('.playerChoiceContainer');
const playAgainButton = document.querySelector('#playAgainButton');

let playerChoice;

rockChoice.addEventListener('click', () => {
  playerChoice = 'rock';
  playGame();
  showResults();
});

paperChoice.addEventListener('click', () => {
  playerChoice = 'paper';
  playGame();
  showResults();
});

scissorsChoice.addEventListener('click', () => {
  playerChoice = 'scissors';
  playGame();
  showResults();
});

let computerChoice;

function getComputerChoice() {
  let getComputerRandomValue = Math.floor(Math.random() * 3);
  if (getComputerRandomValue === 0) {
    changeComputerPictureToRock();
    return computerChoice = "rock";
  } else if (getComputerRandomValue === 1) {
    changeComputerPictureToPaper();
    return computerChoice = "paper";
  } else {
    changeComputerPictureToScissors();
    return computerChoice = "scissors";
  }
}

let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

function playGame() {
  getComputerChoice();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      changeComputerPictureToRock();
      playerChoiceTitle.textContent = 'This round was a DRAW';
      drawCount++;
      return drawCount;
    } else if (computerChoice === "paper") {
      changeComputerPictureToPaper();
      playerChoiceTitle.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      return computerWinCount;
    } else if (computerChoice === "scissors") {
      changeComputerPictureToScissors();
      playerChoiceTitle.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      return playerWinCount;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      changeComputerPictureToRock();
      playerChoiceTitle.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      return playerWinCount;
    } else if (computerChoice === "paper") {
      changeComputerPictureToPaper();
      playerChoiceTitle.textContent = 'This round was a DRAW';
      drawCount++;
      return drawCount;
    } else if (computerChoice === "scissors") {
      changeComputerPictureToScissors();
      playerChoiceTitle.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      return computerWinCount;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      changeComputerPictureToRock();
      playerChoiceTitle.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      return computerWinCount;
    } else if (computerChoice === "paper") {
      changeComputerPictureToPaper();
      playerChoiceTitle.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      return playerWinCount;
    } else if (computerChoice === "scissors") {
      changeComputerPictureToScissors();
      playerChoiceTitle.textContent = 'This round was a DRAW';
      drawCount++;
      return drawCount;
    }
  }
}

function changeComputerPictureToQuestionMark() {
  computerChoiceImg.removeAttribute('src');
  computerChoiceImg.setAttribute('src', '/images/questionMark.png');
}

function changeComputerPictureToRock() {
  computerChoiceImg.removeAttribute('src');
  computerChoiceImg.setAttribute('src', '/images/rock.jpg');
}

function changeComputerPictureToPaper() {
  computerChoiceImg.removeAttribute('src');
  computerChoiceImg.setAttribute('src', '/images/paper.jpg');
}

function changeComputerPictureToScissors() {
  computerChoiceImg.removeAttribute('src');
  computerChoiceImg.setAttribute('src', '/images/scissors.jpg');
}

function showResults() {
  if (playerWinCount === 3) {
    playerChoiceTitle.textContent = 'Congratulations, you WON!';
    playAgain();
  } else if (computerWinCount === 3) {
    playerChoiceTitle.textContent = 'You LOST! Better luck next time!';
    playAgain();
  }
  return
}

function playAgain() {
  section2.classList.toggle('hidden');
  section3.classList.toggle('hidden');
  playerChoiceContainer.classList.toggle('hidden');
  section5.classList.toggle('hidden');
  playAgainButton.classList.toggle('hidden');
}

function resetResults() {
  playerWinCount = 0;
  computerWinCount = 0;
  drawCount = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

playAgainButton.addEventListener('click', () => {
  playAgain();
  changeComputerPictureToQuestionMark();
  resetResults();
});