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
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => { //this is written as an arrow function so THIS can return exactly what we need
    this.tick(); // this is being manually called before the interval starts runmning cause if not the Timer would wait 1000mls until starts
    this.interval = setInterval(this.tick, 1000); // serINterval is a built in method that gives us a timer. The time is passed in milliseconms. 1000mls = 1s. this.interval because we need to use interval in the PAUSE function
  };

  pause = () => {
    clearInterval(this.interval); //another built in function that stops the timer
  };

  tick = () => {
    if (this.timeRemaining <= 0) { // imede que o timer vá além do 0
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  };

  set timeRemaining(time) {
    this.durationInput.value = time;
  };
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton); // this is an instance of the class Timer
timer.start();
