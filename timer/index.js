// class Timer
//-> constructor(durationInput, startButton, pauseButton) SORT OF AN INITIALIZER METHOD in Ruby
//-> start()
//-> pause()
//-> onDurastionCgange()
//-> tick()

class Timer {
  constructor(durationInput, startButton, pauseButton){
    this.durationInput = durationInput; // this lines creates an instance variable for duration input/start/pause, so it can be called from other scopes
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }

  start = () => { //this is written as an arrow function so THIS can return exactly what we need
    this.tick(); // this is being manually called before the interval starts runmning cause if not the Timer would wait 1000mls until starts
    setInterval(this.tick, 1000); // serINterval is a built in method. The time is passed in milliseconms. 1000mls = 1s
  };

  tick = () => {
    console.log('tick')
  };
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton); // this is an instance of the class Timer
timer.start();
