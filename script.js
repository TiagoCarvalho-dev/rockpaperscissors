const submitButton = document.querySelector('#submitButton');
const getPlayerName = document.querySelector('#getPlayerName');
const playerName = document.querySelector('#playerName');
const playerInfo = document.querySelector('.playerInfo');
const section2 = document.querySelector('.section2');
const welcomeMessage = document.querySelector('#welcomeMessage');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');
const section5 = document.querySelector('.section5');
const welcomeMessage2 = document.querySelector('.welcomeMessage2');
const hidden = document.querySelector('.hidden');

submitButton.addEventListener('click', () => {
  playerName.textContent = getPlayerName.value;
  section2.removeChild(playerInfo);
  welcomeMessage.textContent = "This will be a best out of five match.";
  welcomeMessage2.textContent = "Have Fun!";
  welcomeMessage2.classList.toggle('hidden');
  section3.classList.toggle('hidden');
  section4.classList.toggle('hidden');
  section5.classList.toggle('hidden');
});

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

playAgainButton.addEventListener('click', () => {
  playAgain();
  changeComputerPictureToQuestionMark();
  resetResults();
  finalScore.classList.toggle('hidden');
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

function showResults() {
  if (playerWinCount === 3) {
    setTimeout( () => {
      roundSituation.textContent = 'Congratulations, you WON!';
      finalScore.textContent = `${getPlayerName.value} ${playerScore.value} X ${computerScore.value} Computer`;
      finalScore.classList.toggle('hidden');
      playAgain();
    }, 2000);
  } else if (computerWinCount === 3) {
    setTimeout( () => {
      roundSituation.textContent = 'You LOST! Better luck next time!';
      finalScore.textContent = `${getPlayerName.value} ${playerScore.value} X ${computerScore.value} Computer`;
      finalScore.classList.toggle('hidden');
      playAgain();
    }, 2000);
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