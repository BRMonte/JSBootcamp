// the command DOCUMENT contains all infos of the page

// To select the element with id of bear-photo:
document.getElementById('bear-photo')

//To select the element with id of main:
document.getElementById('main')

////////////////////////////////////////////////

// To select all elements with the class of 'special':
document.getElementsByClassName('special');

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName('special');
for (let el of specials) {
  console.log(el);
}

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop() //this works because it's now an array!

// ****************
// querySelector
// ****************
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');
