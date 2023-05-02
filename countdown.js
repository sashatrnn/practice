const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00");

updateCountdown();

const intervalId = setInterval(updateCountdown, 1000);

function updateCountdown(){
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const newYear = newYearTime.getTime();
const currentDate = new Date().getTime();
const gap = newYear - currentDate;
// gap - різниця між кінцевою і поточною датою в мілісекундах.
const days = Math.floor(gap / day)
  .toString()
  .padStart(2, "0");
const hours = Math.floor((gap % day) / hour)
  .toString()
  .padStart(2, "0");
const minutes = Math.floor((gap % hour) / minute)
  .toString()
  .padStart(2, "0");
const seconds = Math.floor((gap % minute) / second)
  .toString()
  .padStart(2, "0");

  dayEl.textContent = days;
  hourEl.textContent = hours;
  minuteEl.textContent = minutes;
  secondEl.textContent = seconds;

  if(gap === 0){
    clearInterval(intervalId);
  }
};