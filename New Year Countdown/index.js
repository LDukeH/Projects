const newYear = new Date("January 1, 2025 00:00:00").getTime();

updateUI = () => {
  const now = new Date().getTime();
  const timeLeft = (newYear - now) / 1000;
  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("second").textContent = seconds;
  if (timeLeft <= 0) {
    window.alert("HAPPY NEW YEAR");
  }
};
setInterval(updateUI, 1000);
