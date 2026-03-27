function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  document.querySelector(".time-main").innerText = `${hours}:${minutes}`;
  document.querySelector(".seconds").innerText = `:${seconds}`;

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const date = now.toLocaleDateString("id-ID", options).toUpperCase();
  const [day, fullDate] = date.split(', ');

  document.querySelector(".day").innerText = day;
  document.querySelector(".date").innerText = fullDate;
}

setInterval(updateClock, 1000);
updateClock();