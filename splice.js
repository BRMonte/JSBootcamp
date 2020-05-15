// remove, add or replace elements in an array

let hey = ['oi', 'ciao', 'salut', 'hello'];
hey.splice(1, 0, "belê?"); //(x, y, z) x = the index where i'm adding or replacing; y = index where i'm deleting something; z = data I'm manipulating
// hey = oi, bele, ciao, salut, hello

hey.splice(3,2);
// starting from index 1 delete 2 elements
