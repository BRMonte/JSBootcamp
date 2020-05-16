// functions is a REUSABLE PROCEDURE
// methods are FUNCTIONS: text.upperCase

function grumpus() {
  console.log('ola...');
  console.log('hey...');
  console.log('ho...');
};

function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`Rolled: ${roll}`);
}

function throuwDice() {
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}

function square(num) {
  console.log(num * num);
}

function sum(x, y) {
  console.log( x + y)
}

function divide(a, b) {
  console.log(a / b)
}
