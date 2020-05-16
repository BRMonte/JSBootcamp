// write a function to find the average value in an array of numbers

function averageNumber(array) {
  let sum = 0
  for (let num of array) {
    sum += num;
  }
  let average = sum / array.length;
  return average;
}

