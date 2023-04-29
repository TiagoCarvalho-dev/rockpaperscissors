const submitButton = document.querySelector('#submitButton');
const getPlayerName = document.querySelector('#getPlayerName');
const playerName = document.querySelector('#playerName');
const playerInfo = document.querySelector('.playerInfo');
const section2 = document.querySelector('.section2');
const welcomeMessage = document.querySelector('#welcomeMessage');
const welcomeMessage2 = document.querySelector('.welcomeMessage2');
const gamePlayArea = document.querySelector('.gamePlayArea');
const matchResult = document.querySelector('.matchResult');

const rockChoiceButton = document.querySelector('#rockChoiceButton');
const paperChoiceButton = document.querySelector('#paperChoiceButton');
const scissorsChoiceButton = document.querySelector('#scissorsChoiceButton');

const roundSituation = document.querySelector('.roundSituation');
const computerChoiceImg = document.querySelector('#computerChoiceImg');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
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

rockChoiceButton.addEventListener('click', () => {
  playerChoice = 'rock';
  toggleChoiceButtons('disabled');
  playGame();
  showGameResults();
});

paperChoiceButton.addEventListener('click', () => {
  playerChoice = 'paper';
  toggleChoiceButtons('disabled');
  playGame();
  showGameResults();
});

scissorsChoiceButton.addEventListener('click', () => {
  playerChoice = 'scissors';
  toggleChoiceButtons('disabled');
  playGame();
  showGameResults();
});

playAgainButton.addEventListener('click', () => {
  toggleFinalResultsElements();
  changeComputerPicture('questionMark');
  resetResults();
});

let computerChoice;

function getComputerChoice() {
  let getComputerRandomValue = Math.floor(Math.random() * 3);
  if (getComputerRandomValue === 0) {
    changeComputerPicture('rock');
    return computerChoice = "rock";
  } else if (getComputerRandomValue === 1) {
    changeComputerPicture('paper');
    return computerChoice = "paper";
  } else {
    changeComputerPicture('scissors');
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
      changeComputerPicture('rock');
      roundSituation.textContent = 'This round was a DRAW';
      drawCount++;
      setTimeout(nextRound, 2000);
      return drawCount;
    } else if (computerChoice === "paper") {
      changeComputerPicture('paper');
      roundSituation.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      setTimeout(nextRound, 2000);
      return computerWinCount;
    } else if (computerChoice === "scissors") {
      changeComputerPicture('scissors');
      roundSituation.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      setTimeout(nextRound, 2000);
      return playerWinCount;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      changeComputerPicture('rock');
      roundSituation.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      setTimeout(nextRound, 2000);
      return playerWinCount;
    } else if (computerChoice === "paper") {
      changeComputerPicture('paper');
      roundSituation.textContent = 'This round was a DRAW';
      drawCount++;
      setTimeout(nextRound, 2000);
      return drawCount;
    } else if (computerChoice === "scissors") {
      changeComputerPicture('scissors');
      roundSituation.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      setTimeout(nextRound, 2000);
      return computerWinCount;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      changeComputerPicture('rock');
      roundSituation.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      setTimeout(nextRound, 2000);
      return computerWinCount;
    } else if (computerChoice === "paper") {
      changeComputerPicture('paper');
      roundSituation.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      setTimeout(nextRound, 2000);
      return playerWinCount;
    } else if (computerChoice === "scissors") {
      changeComputerPicture('scissors');
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
      toggleFinalResultsElements();
      matchResult.textContent = 'Congratulations, you WON!';
      finalScore.textContent = getPlayerName.value + ' ' + playerWinCount + ' X ' + computerWinCount + ' Computer | Draws: ' + drawCount;
    }, 2000);
  } else if (computerWinCount === 3) {
    setTimeout( () => {
      toggleFinalResultsElements();
      matchResult.textContent = 'You LOST! Better luck next time!';
      finalScore.textContent = getPlayerName.value + ' ' + playerWinCount + ' X ' + computerWinCount + ' Computer | Draws: ' + drawCount;
    }, 2000);
  }
  setTimeout( () => toggleChoiceButtons('enabled'), 2000);
  return
}

function toggleFinalResultsElements() {
  gamePlayArea.classList.toggle('hidden');
  welcomeContainer.classList.toggle('hidden');
  playAgainButton.classList.toggle('hidden');
  finalResults.classList.toggle('hidden');
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
  changeComputerPicture('questionMark');
}

function changeComputerPicture(pictureToChange) {
  computerChoiceImg.removeAttribute('src');
  computerChoiceImg.setAttribute('src', '/images/' + pictureToChange + '.png');
}

function toggleChoiceButtons(option) {
  if (option === 'enabled') {
    document.getElementById('rockChoiceButton').disabled = false;
    document.getElementById('paperChoiceButton').disabled = false;
    document.getElementById('scissorsChoiceButton').disabled = false;
  } else if (option === 'disabled') {
    document.getElementById('rockChoiceButton').disabled = true;
    document.getElementById('paperChoiceButton').disabled = true;
    document.getElementById('scissorsChoiceButton').disabled = true;
  }
}