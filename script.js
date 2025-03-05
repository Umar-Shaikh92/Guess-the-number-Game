const userInput = document.getElementById("userInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const chancesDisplay = document.getElementById("chances");
const resetBtn = document.getElementById("resetBtn");

let num = Math.round(Math.random() * 5);
let chance = 0;
const maxChances = 5;

guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

function checkGuess() {
  const input = parseInt(userInput.value);
  chance++;
  chancesDisplay.textContent = maxChances - chance;

  if (isNaN(input) || input < 0 || input > 5) {
    message.textContent = "Please enter a number between 0 and 5!";
    return;
  }
  if (input === num) {
    message.textContent = "Right Answer! 🤩🎉";
    message.style.color = "#2ecc71";
    endGame();
  } else if (chance >= maxChances) {
    message.textContent = "Game Over! Try Again 😑";
    message.style.color = "#e74c3c";
    endGame();
  } else {
    message.textContent = `Wrong! ${maxChances - chance} chances left.`;
    message.style.color = "#e74c3c";
  }

  userInput.value = "";
}

function endGame() {
  guessBtn.disabled = true;
  userInput.disabled = true;
  resetBtn.classList.remove("hidden");
}

function resetGame() {
  num = Math.round(Math.random() * 5);
  chance = 0;
  chancesDisplay.textContent = maxChances;
  message.textContent = "";
  guessBtn.disabled = false;
  userInput.disabled = false;
  resetBtn.classList.add("hidden");
  userInput.value = "";
}
