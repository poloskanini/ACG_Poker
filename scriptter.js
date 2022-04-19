const cards = document.querySelectorAll('.box');

// Flip Card
function flipCard() {
  this.classList.toggle('flip');
}

// Loop on cards with a forEach (querySelectorAll only not enough)
cards.forEach(card => card.addEventListener('click', flipCard));