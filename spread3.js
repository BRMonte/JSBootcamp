const feline = {
  legs: 4,
  family: 'Felidae'
};

const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4
};

const dog = {
  ...canine, // DOG heritages the key-value pair from CANINE
  isPet: true,
  adorable: true
}
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline, // houseCat heritages the key-value pair from FELINE
  isGrumpy: true,
  personality: 'unpredictable'
}
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = { // THIS EXAMPLE SHOWS THAT WHEN YOU HAVE 2 EQUAL KEYS, THEY WILL OVERWRITE EACH OTHER: here FELINE comes after CANINE, thats why family: "feline"
  ...canine,
  ...feline
}
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
}
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog
}

const random = [...'hello', {
  ...catDog
}]

/////////////////////////////

{...[4,5,6,7]};
// {0: 4, 1: 5, 2: 6, 3: 7} here the index will become keys
