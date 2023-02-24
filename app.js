const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const timer = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let date = new Date(tempYear, tempMonth, tempDay + 5, 19, 30, 0);

const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const month = months[date.getMonth()];
const day = weekdays[date.getDay()];

giveaway.textContent = `giveaway ends on ${year} ${month} ${day} ${hours}:${minutes}`;

const future = date.getTime();

// calculating remaining time and displaying it
function remainingTime() {
  const current = new Date().getTime();
  const time = future - current;

  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;

  let days = Math.floor(time / day);
  let hours = Math.floor((time % day) / hour);
  let minutes = Math.floor((time % hour) / minute);
  let seconds = Math.floor((time % minute) / 1000);

  const timeTable = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  timer.forEach((item, index) => {
    item.innerHTML = format(timeTable[index]);
    if (time < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class='expired'>giveaway has ended</h4>`;
    }
  });
}

let countdown = setInterval(remainingTime, 1000);
remainingTime();
