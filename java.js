let userScore = 0;
let computerScore = 0;
let round = 0;

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const startScreen = document.getElementById("start-screen");
  const gameSection = document.getElementById("game-section");

  startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    gameSection.classList.remove("hidden");
  });

  restartButton.addEventListener("click", () => {
    resetGame();
  });
});

function play(userChoice) {
  if (round >= 5) return;

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const resultDisplay = document.getElementById('result');
  const scoreDisplay = document.getElementById('score');
  const finalResultDisplay = document.getElementById('final-result');
  const choiceButtons = document.querySelectorAll('.choice-btn');
  const restartButton = document.getElementById('restart-button');

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}`;
    userScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}`;
    computerScore++;
  }

  round++;
  resultDisplay.textContent = `Round ${round}: ${result}`;
  scoreDisplay.textContent = `Your Score: ${userScore} | Computer Score: ${computerScore}`;

  if (round === 5) {
    choiceButtons.forEach(btn => btn.disabled = true);
    restartButton.classList.remove('hidden');

    let finalMsg = '';
    if (userScore > computerScore) {
      finalMsg = " Congratulations! You won the game!";
    } else if (computerScore > userScore) {
      finalMsg = " The computer wins the game!";
    } else {
      finalMsg = " It's a tie!";
    }

    finalResultDisplay.textContent = finalMsg;
  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  round = 0;

  document.getElementById('result').textContent = '';
  document.getElementById('score').textContent = '';
  document.getElementById('final-result').textContent = '';
  document.getElementById('restart-button').classList.add('hidden');

  const choiceButtons = document.querySelectorAll('.choice-btn');
  choiceButtons.forEach(btn => btn.disabled = false);
}
