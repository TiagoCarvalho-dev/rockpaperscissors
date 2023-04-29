const submitButton = document.querySelector('#submitButton');
const getPlayerName = document.querySelector('#getPlayerName');
const playerName = document.querySelector('#playerName');
const playerInfo = document.querySelector('.playerInfo');
const section2 = document.querySelector('.section2');
const welcomeMessage = document.querySelector('#welcomeMessage');
const welcomeMessage2 = document.querySelector('.welcomeMessage2');
const gamePlayArea = document.querySelector('.gamePlayArea');
const matchResult = document.querySelector('.matchResult');

const rockChoice = document.querySelector('#rockChoice');
const paperChoice = document.querySelector('#paperChoice');
const scissorsChoice = document.querySelector('#scissorsChoice');

const roundSituation = document.querySelector('.roundSituation');
const computerChoiceImg = document.querySelector('#computerChoiceImg');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const playerChoiceContainer = document.querySelector('.playerChoiceContainer');
const playAgainButton = document.querySelector('#playAgainButton');
const finalScore = document.querySelector('.finalScore');
const finalResults = document.querySelector('.finalResults');
const welcomeContainer = document.querySelector('.welcomeContainer');

submitButton.addEventListener('click', () => {
  playerName.textContent = getPlayerName.value;
  section2.removeChild(playerInfo);
  welcomeMessage.textContent = "This will be a best out of five match.";
  welcomeMessage2.textContent = "Have Fun!";
  gamePlayArea.classList.toggle('hidden');
});

let playerChoice;

rockChoice.addEventListener('click', () => {
  playerChoice = 'rock';
  disableChoiceButtons();
  playGame();
  showGameResults();
});

paperChoice.addEventListener('click', () => {
  playerChoice = 'paper';
  disableChoiceButtons();
  playGame();
  showGameResults();
});

scissorsChoice.addEventListener('click', () => {
  playerChoice = 'scissors';
  disableChoiceButtons();
  playGame();
  showGameResults();
});

playAgainButton.addEventListener('click', () => {
  playAgain();
  changeComputerPictureToQuestionMark();
  resetResults();
  finalResults.classList.toggle('hidden');
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
      roundSituation.textContent = 'This round was a DRAW';
      drawCount++;
      setTimeout(nextRound, 2000);
      return drawCount;
    } else if (computerChoice === "paper") {
      changeComputerPictureToPaper();
      roundSituation.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      setTimeout(nextRound, 2000);
      return computerWinCount;
    } else if (computerChoice === "scissors") {
      changeComputerPictureToScissors();
      roundSituation.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      setTimeout(nextRound, 2000);
      return playerWinCount;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      changeComputerPictureToRock();
      roundSituation.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      setTimeout(nextRound, 2000);
      return playerWinCount;
    } else if (computerChoice === "paper") {
      changeComputerPictureToPaper();
      roundSituation.textContent = 'This round was a DRAW';
      drawCount++;
      setTimeout(nextRound, 2000);
      return drawCount;
    } else if (computerChoice === "scissors") {
      changeComputerPictureToScissors();
      roundSituation.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      setTimeout(nextRound, 2000);
      return computerWinCount;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      changeComputerPictureToRock();
      roundSituation.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      setTimeout(nextRound, 2000);
      return computerWinCount;
    } else if (computerChoice === "paper") {
      changeComputerPictureToPaper();
      roundSituation.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      setTimeout(nextRound, 2000);
      return playerWinCount;
    } else if (computerChoice === "scissors") {
      changeComputerPictureToScissors();
      roundSituation.textContent = 'This round was a DRAW';
      drawCount++;
      setTimeout(nextRound, 2000);
      return drawCount;
    }
  }
}

function showGameResults() {
  if (playerWinCount === 3) {
    setTimeout( () => {
      playAgain();
      matchResult.textContent = 'Congratulations, you WON!';
      finalScore.textContent = getPlayerName.value + ' ' + playerWinCount + ' X ' + computerWinCount + ' Computer | Draws: ' + drawCount;
      finalResults.classList.toggle('hidden');
    }, 2000);
  } else if (computerWinCount === 3) {
    setTimeout( () => {
      playAgain();
      matchResult.textContent = 'You LOST! Better luck next time!';
      finalScore.textContent = getPlayerName.value + ' ' + playerWinCount + ' X ' + computerWinCount + ' Computer | Draws: ' + drawCount;
      finalResults.classList.toggle('hidden');
    }, 2000);
  }
  setTimeout(enableChoiceButtons, 2000);
  return
}

function playAgain() {
  gamePlayArea.classList.toggle('hidden');
  playAgainButton.classList.toggle('hidden');
  welcomeContainer.classList.toggle('hidden');
}

function resetResults() {
  playerWinCount = 0;
  computerWinCount = 0;
  drawCount = 0;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}

function nextRound() {
  roundSituation.textContent = 'Make your choice';
  changeComputerPictureToQuestionMark();
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

function enableChoiceButtons() {
  document.getElementById('rockChoice').disabled = false;
  document.getElementById('paperChoice').disabled = false;
  document.getElementById('scissorsChoice').disabled = false;
}

function disableChoiceButtons() {
  document.getElementById('rockChoice').disabled = true;
  document.getElementById('paperChoice').disabled = true;
  document.getElementById('scissorsChoice').disabled = true;
}