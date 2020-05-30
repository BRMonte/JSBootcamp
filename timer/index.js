// class Timer
//-> constructor(durationInput, startButton, pauseButton) SORT OF AN INITIALIZER METHOD in Ruby
//-> start()
//-> pause()
//-> onDurastionCgange()
//-> tick()

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI; //essa linha GET o atributo R do elemento CIRCLE para acharo perimetro
circle.setAttribute('stroke-dasharray', perimeter); //essa linha SET o atributo stroke-dasharray para ser igual ao perimetro


let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {  // this is an instance of the class Timer
  onStart() {
    console.log('timer started');
  },

  onTick() {
    console.log('Timer just ticked down');
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset = currentOffset - 1;
  },

  onComplete() {
    console.log('Timer is completed');
  }

});
