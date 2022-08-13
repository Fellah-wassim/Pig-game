'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
diceEl.classList.add('hidden');
let currentScore = 0;
let player = 0;
const scores = [0, 0];
let playing = true;
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generating a random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //switch the player if its one
    if (dice !== 1) {
      currentScore += dice;
      if (player === 0) current0El.textContent = currentScore;
      if (player === 1) current1El.textContent = currentScore;
    } else {
      //switch user
      currentScore = 0;
      if (player === 0) {
        current0El.textContent = 0;
        document
          .querySelector('.player--' + player)
          .classList.remove('player--active');
        player = 1;
        document
          .querySelector('.player--' + player)
          .classList.add('player--active');
      } else {
        current1El.textContent = 0;
        document
          .querySelector('.player--' + player)
          .classList.remove('player--active');
        player = 0;
        document
          .querySelector('.player--' + player)
          .classList.add('player--active');
      }
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[player] += currentScore;
    if (scores[player] >= 100) {
      playing = false;
      document.getElementById('score--' + player).textContent = scores[player];
      diceEl.classList.add('hidden');
      document
        .querySelector('.player--' + player)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + player)
        .classList.remove('player--active');
    } else {
      currentScore = 0;
      if (player === 0) {
        score0El.textContent = scores[player];
        document
          .querySelector('.player--' + player)
          .classList.remove('player--active');
        player = 1;
        document
          .querySelector('.player--' + player)
          .classList.add('player--active');
        current0El.textContent = 0;
      } else {
        score1El.textContent = scores[player];
        document
          .querySelector('.player--' + player)
          .classList.remove('player--active');
        player = 0;
        document
          .querySelector('.player--' + player)
          .classList.add('player--active');
        current1El.textContent = 0;
      }
    }
  }
});
btnNew.addEventListener('click', function () {
  document
    .querySelector('.player--' + player)
    .classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  diceEl.classList.add('hidden');
  currentScore = 0;
  player = 0;
  scores[0] = 0;
  scores[1] = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playing = true;
});
