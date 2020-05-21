// class Timer
//-> constructor(durationInput, startButton, pauseButton) SORT OF AN INITIALIZER METHOD in Ruby
//-> start()
//-> pause()
//-> onDurastionCgange()
//-> tick()

class Timer {
  constructor(durationInput, startButton, pauseButton){
    this.durationInput = durationInput; // this line creates an instance variable for duration input, so it can be called from other scopes
    this.startButton = startButton;
    this.pauseButton = pauseButton;
  }
}
