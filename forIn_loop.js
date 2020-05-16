// loop over the keys of an object

const hey = {
  italian: "ciao",
  spanish: "hola",
  french: "salut",
  brazilian: "e aí"
};

for (let i in hey) {
  console.log(i); // i is the KEY not the ELEMENT nor the VALUE
  console.log(hey[i]); // here we take the VALUE
}
