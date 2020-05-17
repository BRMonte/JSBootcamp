//spread IS THESE ... little dots that expand an array into strings in order to more precisely call functions

function giveMeFour(a, b, c, d) { // THIS FUNCTIONS WILL ENUMERATE WIH LETTERS EACH ARG. but if you pass an ARRAY, normally its elements wont be treated individually. I would have to iterate over it. With SPREAD everything got simpler
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"] HERE THE WHOLE ARRAY IS SEEN AS ENURABLE AND NOT EACH ELEMENT OF IT
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(...'GOAT');
// a G
// b O
// c A
// d T
