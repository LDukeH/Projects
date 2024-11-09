let count = 0;
const counter = document.getElementById("counter");
const sound = document.getElementById("inanoise");
function updateCount(input) {
  count += input;
  counter.value = count;
}

function stopAllAudios(audio) {
  audio.pause();
  audio.currentTime = 0;
}

function increment() {
  updateCount(1);
  stopAllAudios(sound);
  sound.play();
}

function decrement() {
  updateCount(-1);
  stopAllAudios(sound);
  sound.play();
}
