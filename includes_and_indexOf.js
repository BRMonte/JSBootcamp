// includes return a BOOLEAN
let even = [2, 4, 6]
even.includes(4);
//TRUE
even.includes(4, 3); // THE SECOND ARG REFERS TO THE INDEX FROM WHICH TEH SEARCH WILL START. So: is there a 4 after index 3?
// FALSE


//indexOf: will serach for a value and if it finds it, will return the INDEX of it

even.indexOf(6);
//2
even.indexOf(6, 5); //THE SECOND ARG REFERS TO THE INDEX FROM WHICH TEH SEARCH WILL START
