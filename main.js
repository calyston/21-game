//Game Rules

//If player hand is more than the dealer hand and is equal to or less than 21, player wins
//Else dealer wins

/* Buttons */

document.querySelector('#deal').addEventListener('click', Deal);

function Deal() {
  alert('Deal me!');
};

document.querySelector('#hit').addEventListener('click', Hit);

function Hit() {
  showCard();
};

document.querySelector('#stick').addEventListener('click', Stick);

function Stick() {
  alert('I will stick!');
};


/* Cards */

const playingCards = [
  { name: 'Ace', value: 1, photo: '/assets/images/card1.png' },
  { name: '2', value: 2, photo: '/assets/images/card2.png' },
  { name: '3', value: 3, photo: '/assets/images/card3.png' },
  { name: '4', value: 4, photo: '/assets/images/card4.png' },
  { name: '5', value: 5, photo: '/assets/images/card5.png' },
  { name: '6', value: 6, photo: '/assets/images/card6.png' },
  { name: '7', value: 7, photo: '/assets/images/card7.png' },
  { name: '8', value: 8, photo: '/assets/images/card8.png' },
  { name: '9', value: 9, photo: '/assets/images/card9.png' },
  { name: '10', value: 10, photo: '/assets/images/card10.png' },
  { name: 'Jack', value: 10, photo: '/assets/images/card11.png' },
  { name: 'Queen', value: 10, photo: '/assets/images/card12.png' },
  { name: 'King', value: 10, photo: '/assets/images/card13.png' },
]


//Random Number Generator
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};


//Random Card Selector
function cardSelector() {
  const arrayIndex = randomNumber(0, playingCards.length);
  return playingCards[arrayIndex];
};


//Show Playing Card
function showCard() {
  let cardImage = document.createElement('img');
  let card = cardSelector();
  cardImage.src = card.photo;
  document.querySelector('.player-box').appendChild(cardImage);
};


//Score
function cardValue() {
  const arrayIndex = randomNumber(0, playingCards.length);
  return playingCards[arrayIndex].value;
};



console.log(cardSelector(), "cardSelector function test");