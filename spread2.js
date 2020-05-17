const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]


////////////////////////////

"abdefg".split('';
// ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

[...'abcdefg'];
// ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

[...'abc', ...'def', 'HELLO!'];
// ['a', 'b', 'c', 'd', 'e', 'f', 'HELLO!']
