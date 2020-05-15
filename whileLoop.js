// should be used when you don't know how many times you need to loop

const target = Math.floor(Math.random() * 10); // this lines takes a random nº from 0 to 10
let guess = Math.floor(Math.random() * 10);

while(guess !== target) { // while guess IS NOT equal to target
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
