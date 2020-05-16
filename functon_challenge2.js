// write a function to find the average value in an array of numbers

function averageNumber(array) {
  let sum = 0
  let average = sum / array.length;
  for (let num of array) {
    sum += num;
  }
  return average;
}
