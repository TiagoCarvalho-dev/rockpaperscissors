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

const playerChoiceTitle = document.querySelector('.playerChoiceTitle');
const computerChoiceImg = document.querySelector('#computerChoiceImg');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

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

function showResults() {
  
  if (playerWinCount === 3) {
    playerChoiceTitle.textContent = 'Congratulations, you WON!';
  } else if (computerWinCount === 3) {
    playerChoiceTitle.textContent = 'You LOST! Better luck next time!';
  }
  return
}

let playerWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

function playGame() {

  getComputerChoice();

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/rock.jpg');
      playerChoiceTitle.textContent = 'This round was a DRAW';
      drawCount++;
      return drawCount;
    } else if (computerChoice === "paper") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/paper.jpg');
      playerChoiceTitle.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      return computerWinCount;
    } else if (computerChoice === "scissors") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/scissors.jpg');
      playerChoiceTitle.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      return playerWinCount;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/rock.jpg');
      playerChoiceTitle.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      return playerWinCount;
    } else if (computerChoice === "paper") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/paper.jpg');
      playerChoiceTitle.textContent = 'This round was a DRAW';
      drawCount++;
      return drawCount;
    } else if (computerChoice === "scissors") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/scissors.jpg');
      playerChoiceTitle.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      return computerWinCount;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/rock.jpg');
      playerChoiceTitle.textContent = 'You LOST this round';
      computerWinCount++;
      computerScore.textContent = computerWinCount;
      return computerWinCount;
    } else if (computerChoice === "paper") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/paper.jpg');
      playerChoiceTitle.textContent = 'You WON this round';
      playerWinCount++;
      playerScore.textContent = playerWinCount;
      return playerWinCount;
    } else if (computerChoice === "scissors") {
      computerChoiceImg.removeAttribute('src');
      computerChoiceImg.setAttribute('src', '/images/scissors.jpg');
      playerChoiceTitle.textContent = 'This round was a DRAW';
      drawCount++;
      return drawCount;
    }
  }
}









/*
for (; playerWinCount < 3 && computerWinCount < 3;) {
  playerChoiceTitle.textContent = 'Make your choice';
  computerChoiceImg.removeAttribute('src');
  computerChoiceImg.setAttribute('src', '/images/questionMark.jpg');

  if (playerWinCount === 0 && computerWinCount === 0 && drawCount === 0) {
    playerChoiceTitle.textContent = 'This is your first game in the best out of five. Good Luck!';
  } else if (playerWinCount === 2 && computerWinCount === 2){
    playerChoiceTitle.textContent = 'This is the final game. Whoever wins is the champion!';
  } else if (playerWinCount === 2 || computerWinCount === 2) {
    playerChoiceTitle.textContent = 'This might be the last game, choose carefully!';
  }
  
  getComputerChoice();
  playGame();
}
/*











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