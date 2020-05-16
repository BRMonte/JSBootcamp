// right a functions to take 2 arguments (password and username) and chek its validity
// the password must have at least 8 chars
// can not contain the username
// can not contain spaces

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') !== -1) { //if there is no space, this method will return -1
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
   ) {
    return false;
  }
  return true;
}

function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooShort || hasSpace || tooSimilar) return false;
  return true;
}
