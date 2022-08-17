const clock = document.querySelector('#clock');
const miniClock = document.querySelector('#mini-clock');
const day = document.querySelector('#day');

function getClock() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  day.innerText = `${year}/${month}/${date}`;
  if (clock) {
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
  miniClock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
