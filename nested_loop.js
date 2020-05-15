for (let i = 1;  i <= 10; i++){
  console.log('OUTER LOOP:', i);
  for (let j = 10; j >= 0; j-= 2) {
    console.log(' **inner loop', j);
  }
}
// the above example does not show how nested loops are usefull

// beneath a more proper example of the utility of neste loops

const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) { // thie loop iterates over gameBoard
  let row = gameBoard[i];
  console.log(row);
  for (let j = 0; j < row.length; j++) { // this loops over the intern arrays of gameBoard
    totalScore += row[j];
  }
}
