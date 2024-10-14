"use strict";
const score1 = document.getElementById("score--0");
const score2 = document.getElementById("score--1");
const current1 = document.getElementById("current--0");
const current2 = document.getElementById("current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
score1.textContent = 0;
score2.textContent = 0;
let currentSore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
const swicthPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = currentSore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
  currentSore = 0;
};
const activePlayer1 = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
};
const activePlayer2 = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};
btnRoll.addEventListener("click", function () {
  if (playing) {
    const die = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${die}.png`;
    if (die !== 1) {
      // currentSore = currentSore + die
      currentSore += die;
      // current1.textContent = currentSore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentSore;
    } else {
      swicthPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentSore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      swicthPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  dice.classList.remove("hidden");
  activePlayer1();
  activePlayer2();
});
