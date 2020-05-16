// write a function to check if a string is a pangram (has all letters of the alphabet)

function isPangram(text) {
  let lowerCase = text.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (lowerCase.indexOf (char) === -1) {
      return false;
    }
  }
  return true;
}

