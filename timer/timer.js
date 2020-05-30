class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput; // this lines creates an instance variable for duration input/start/pause, so it can be called from other scopes
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  start = () => { //this is written as an arrow function so THIS can return exactly what we need

    if (this.onStart) {
      this.onStart(this.timeRemaining); // by adding this.timeRemaining, when the timer starts it will know for how longe
    }

    this.tick(); // this is being manually called before the interval starts runmning cause if not the Timer would wait 1000mls until starts
    this.interval = setInterval(this.tick, 50); // serINterval is a built in method that gives us a timer. The time is passed in milliseconms. 1000mls = 1s. this.interval because we need to use interval in the PAUSE function
  };

  pause = () => {
    clearInterval(this.interval); //another built in function that stops the timer
  };

  tick = () => {
    if (this.timeRemaining <= 0) { // impede que o timer vá além do 0
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.5; // os timeRemaining nao tem () pq é um GETTER
      if (this.onTick) {
        this.onTick(this.timeRemaining); //this.timeRemaining foi post aqui para poder ser usado em onTick no index.js
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  };

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2); //este .toFixed(2) é uma forma de contornar a imprecisão matematica do JS para que os milisegundos etc sejam nº redondos
  };
}
