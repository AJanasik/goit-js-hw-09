function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

function startColorSwitching() {
  startButton.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorSwitching() {
  startButton.disabled = false;
  clearInterval(intervalId);
  intervalId = null;
}

startButton.addEventListener('click', startColorSwitching);
stopButton.addEventListener('click', stopColorSwitching);
