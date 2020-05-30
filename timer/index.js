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


let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {  // this is an instance of the class Timer
  onStart(totalDuration) {
    console.log('timer started');
    duration = totalDuration
  },

  onTick(timeRemaining) { //timeRemaining é uma instance variable em Timer e foi passada aqui para ajustar o tick do relógio ao andor do circulo
    console.log('Timer just ticked down');
    circle.setAttribute('stroke-dashoffset',
      perimeter * timeRemaining / duration - perimeter
    );
  },

  onComplete() {
    console.log('Timer is completed');
  }

});
