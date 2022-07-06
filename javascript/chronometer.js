class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback == 'function') {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let milisecToSec = this.currentTime*0.01
    let miliSecToMin = milisecToSec*0.166667
    return Math.floor(miliSecToMin / 60);
  }

  getSeconds() {
    let milisecToSec = this.currentTime*0.01
    return Math.floor(milisecToSec % 60);
  }

  getMilliseconds() {   
    return this.currentTime % 100;
   }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let getMilliseconds = this.getMilliseconds();

    let minuteDigits = this.computeTwoDigitNumber(minutes);
    let secondDigits = this.computeTwoDigitNumber(seconds);

    return `${minuteDigits}:${secondDigits}:${getMilliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
