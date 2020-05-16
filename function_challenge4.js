// write a getCard() function which returns a random playing card object

// function getCard() {
//   const cards = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A',
//   ];
//   const idx = Math.floor(Math.random() * cards.length);
//   const card = cards[idx];

//   const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//   const suitsIdx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitsIdx];

//   return `${card} of ${suit}`
// }

// getCard();

// DRY the above code CAUSE WE ARE REPEATING FUNCTIONALITY by writing one more function

function pick(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

function getCard() {
  const cards = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];

  const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

  return `${pick(cards)} of ${pick(suits)}`;
}

getCard();
