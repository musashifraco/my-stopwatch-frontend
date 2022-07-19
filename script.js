//variables with time values
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

//other variables
var interval = 10;
var display;

//spans
let ml = document.getElementById("ml");
var ss = document.getElementById("ss");
let mm = document.getElementById("mm");
let hh = document.getElementById("hh");

//registration order
var td2p = 0;

//button audio
const buttonAudio = new Audio();
buttonAudio.src = "audio/mixkit-click-melodic-tone-1129.wav";

//get elements
var record_table_body = document.getElementById("record-table-body");

var record_container = document.querySelector("record-container");

//functions
function start() {
  buttonAudio.play();
  display = setInterval(() => {
    timer();
  }, interval);
}

function pause() {
  buttonAudio.play();
  clearInterval(display);
}

function stop() {
  buttonAudio.play();

  clearInterval(display);

  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  ml.innerText = "00";
  ss.innerText = "00";
  mm.innerText = "00";
  hh.innerText = "00";
}

function recordd() {
  buttonAudio.play();
  td2p++;

  const tr = document.createElement("tr");
  tr.classList.add("removeit", ".flex");

  const td2 = document.createElement("td");

  const td = document.createElement("td");

  td.innerText = `${hh.textContent}:${mm.textContent}:${ss.textContent}:${ml.textContent}`;

  td2.innerText = td2p;

  tr.appendChild(td2);
  tr.appendChild(td);

  record_table_body.appendChild(tr);
}

function clean() {
  buttonAudio.play();
  record_table_body.removeChild(record_table_body.lastChild);
  td2p--;
}

function timer() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  // format

  ml.innerText = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

  ss.innerText = seconds < 10 ? `0${seconds}` : seconds;
  mm.innerText = minutes < 10 ? `0${minutes}` : minutes;
  hh.innerText = hours < 10 ? `0${hours}` : hours;
}

// Current Date
var date;

setInterval(() => {
  date = new Date().toString();
  document.getElementById("current-date").innerText = date;
}, 1000);

function record() {}
