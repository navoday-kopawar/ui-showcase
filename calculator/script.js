let audioCtx;

function feedback() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "sine";
  osc.frequency.value = 650;
  gain.gain.value = 0.035;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + 0.03);

  if (navigator.vibrate) navigator.vibrate(20);
}

/* =============================== */

const display = document.getElementById("display");
let currentInput = "0";
let shouldResetDisplay = false;
let isDarkMode = false;

function appendToDisplay(value) {
  if (shouldResetDisplay) {
    currentInput = value;
    shouldResetDisplay = false;
  } else {
    currentInput =
      currentInput === "0" && value !== "." ? value : currentInput + value;
  }
  display.value = currentInput;
}

function clearAll() {
  currentInput = "0";
  display.value = currentInput;
}

function deleteLast() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  display.value = currentInput;
}

function calculate() {
  try {
    const sanitized = currentInput.replace(/[^0-9+\-*/.]/g, "");
    const result = Function("return " + sanitized)();
    currentInput = isFinite(result) ? result.toString() : "Error";
    display.value = currentInput;
    shouldResetDisplay = true;
  } catch {
    display.value = "Error";
    shouldResetDisplay = true;
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark", isDarkMode);
}
