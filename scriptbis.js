const cards = document.querySelectorAll('.poker-card');
const pokerTable = document.querySelector('.poker-table');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchNumber = 0;
let hitNumber = 0;

// Flip Card
function flipCard() {
  if (lockBoard) return;
  if(this === firstCard) return;

  this.classList.toggle('flip');
}

// Loop on cards with a forEach (querySelectorAll only not enough)
cards.forEach(card => card.addEventListener('click', flipCard));