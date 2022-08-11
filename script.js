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

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //generating a random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //switch the player if its one
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore; //change later
  } else {
    //switch user
    currentScore = 0;
  }
});
