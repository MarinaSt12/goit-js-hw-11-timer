// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
  dayInterface: document.querySelector('[data-value="days"]'),
  hourInterface: document.querySelector('[data-value="hours"]'),
  minInterface: document.querySelector('[data-value="mins"]'),
  secInterface: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.intervalId = null;
  }
  startTimer() {
    const timeBefore = this.targetDate;
    upgradeInterface(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const leftTime = timeBefore - currentTime;
      upgradeInterface(leftTime);
    }, 1000);
  }
  stopTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    upgradeInterface(0);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});

timer.startTimer();

function upgradeInterface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.dayInterface.textContent = `${days}`;
  refs.hourInterface.textContent = `${hours}`;
  refs.minInterface.textContent = `${mins}`;
  refs.secInterface.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

//============================================== с урока Вовы ==============================================
// const refs = {
//   startBtn: document.querySelector('#start'),
//   stopBtn: document.querySelector('#stop'),
//   secondText: document.querySelector('.seconds'),
//   minutesText: document.querySelector('.minutes'),
//   hoursText: document.querySelector('.hours'),
//   daysText: document.querySelector('.days'),
// };

// let watchId = null;
// let startDate = null;
// let result = null;
// let seconds = null;
// let minutes = null;
// let hours = null;
// let days = null;

// function timer() {
//   result = Math.floor((new Date() - startDate) / 1000);
//   seconds = result % 60;
//   minutes = Math.floor(result / 60);
//   hours = Math.floor(result / 60);
//   days = Math.floor(result / 24);
//   refs.secondText.textContent = seconds < 10 ? '0${seconds}' : seconds;
//   refs.minutesText.textContent = minutes < 10 ? '0${minutes}' : minutes;
//   refs.hoursText.textContent = hours < 10 ? '0${hours}' : hours;
//   refs.daysText.textContent = days < 10 ? '0${days}' : days;
// }

// function startWatch() {
//   startDate = new Date();
//   watchId = setInterval(timer, 1000);
// }

// function stopWatch() {
//   clearInterval(watchId);
// }

// refs.startBtn.addEventListener('click', startWatch);
// refs.stopBtn.addEventListener('click', stopWatch);
