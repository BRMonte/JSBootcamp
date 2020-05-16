// creates a new array from an existing array
const nums = [20, 45, 98, 0, 23, 57, 359, 345];

const doubles = nums.map(function(num) {
  return num * 2;
})

// in order to be able to manipulate this new array, I have to assign it to a variable

const blabla = nums.map(function (n)
{
  return {
    value: n,
    isEven: n % 2 === 0
  };
})

const words = ['asap', 'byob', 'rspv', 'diy']
