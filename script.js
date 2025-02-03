//selecting element
const player01 = document.querySelector(".player--0");
const player02 = document.querySelector(".player--1");

const score01 = document.querySelector("#score--0");
const score02 = document.querySelector("#score--1");
const currentPlayer01 = document.querySelector("#current--0");
const currentPlayer02 = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");

const rollButton = document.querySelector(".btn--roll");
const newButton = document.querySelector(".btn--new");
const holdButton = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

function init() {
  //start conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score01.textContent = 0;
  score02.textContent = 0;
  currentPlayer01.textContent = 0;
  currentPlayer02.textContent = 0;
  diceEl.classList.add("hidden");
  player01.classList.remove("player--winner");
  player02.classList.remove("player--winner");
  player01.classList.add("player--active");
  player02.classList.remove("player--active");
}
init();
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player01.classList.toggle("player--active");
  player02.classList.toggle("player--active");
}

//rolling dice functionality
rollButton.addEventListener("click", () => {
  if (playing) {
    // 1. Generate rundom dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    //2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;

    //3. Check the rolled 1
    if (dice !== 1) {
      //add to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
holdButton.addEventListener("click", () => {
  if (playing) {
    //1. add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
newButton.addEventListener("click", init);
