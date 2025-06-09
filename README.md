# webdevelopment

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rock Paper Scissors</title>
  <link rel="stylesheet" href="cascade.css" />
</head>
<body>

  <div class="game-container">
    <h1>Rock-Paper-Scissors</h1>

    <!-- Start Game Button -->
    <div id="start-screen">
      <button id="start-button">Start Game</button>
    </div>

    <!-- Game Section Hidden Initially -->
    <div id="game-section" class="hidden">
      <div class="choices">
        <button class="choice-btn" onclick="play('rock')">🪨Rock</button>
        <button class="choice-btn" onclick="play('paper')">🗞Paper</button>
        <button class="choice-btn" onclick="play('scissors')">✂Scissors</button>
      </div>

      <div class="result" id="result"></div>
      <div class="score" id="score"></div>
      <div class="final-result" id="final-result"></div>

      <button id="restart-button" class="hidden">Restart Game</button>
    </div>
  </div>

  <script src="java.js"></script>
</body>
</html>


css (cascade.css)

body {
  margin: 0;
  padding: 0;
  background-color: pink;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.game-container {
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  margin: 10px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: green;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

.result, .score, .final-result {
  margin-top: 20px;
  font-size: 1.2rem;
}

.final-result {
  font-weight: bold;
  color: #d32f2f;
}

.hidden {
  display: none;
}


  java script(java.js)

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
