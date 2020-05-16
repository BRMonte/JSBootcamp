let hey = [
  'ola',
  'salut',
  'ciao',
  'hola'
]

const greetings = hey.find(greeting => {
  return greeting.includes('h');
})
