const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;
function displayMessage(mes) {
  message.textContent = mes;
}
function guessTheNumber() {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    number.textContent = secretNumber;
    number.style.width = "30rem";

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secretNumber ? "⬆ Too High!" : "⬇ Too Low!");
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      displayMessage("💥 You lost the game");
      score.textContent = 0;
    }
  }
}
check.addEventListener("click", () => {
  guessTheNumber();
});
function resetFields() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  displayMessage("Start guessing...");
  score.textContent = scoreNumber;
  number.textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
}
again.addEventListener("click", () => {
  resetFields();
});
