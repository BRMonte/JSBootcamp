// shorter way to write functions

const times = (x, y) => { //only 2 parameters
  return x * y;
}

const square = (x) => { //only 1 parameter
  return x * x;
}

const square = () => { //no parameter
  console.log('HI');
}

// ARROW FUNCTION IMPLICIT RETURN

const square = (x) => {
  x * x;
}

// ARROW FUNCTION 1 LINE

const square = (x) => x * x;
const double = nums.map(n => n * 2);
