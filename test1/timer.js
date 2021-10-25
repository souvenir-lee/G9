const timer = document.querySelector('.js-timer')
const timerStopBtn = document.querySelector('.js-timer__stopBtn')
const timerStartBtn = document.querySelector('.js-timer__startBtn')
const currentTime = document.querySelector('.js-timer__current')

// 현재 시간 표시
function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  const sec = date.getSeconds();
  currentTime.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

// 타이머
// 시작 시 설정되는 duration은 tab.js에 있음
// var duration = Number(prompt('분을 알려주세요.') * 60 * 1000);

let TIME = 0
let cron //clearInterval 위한 함수

function startButton() {
  if (duration === 0) {
    alert('타이머를 설정해주세요')
    setduration = Number(prompt('타이머를 몇분으로 설정하시겠습니까?'))
    duration = setduration * 60 * 1000;
    timer.innerHTML = `${setduration < 10 ? `0${setduration}` : setduration}:00`;
    return
  }

  updateTimer()
  stopButton()
  cron = setInterval(updateTimer, 1000)
  timer.classList.add('hide')
}

function stopButton() {
  clearInterval(cron)
  timer.classList.remove('hide')
}

function clearButton() {
  timer.innerHTML = '00:00'
  duration = 0;
  setduration = 0;
  TIME = 0;
  stopButton()
}

function updateTimer() {
  let sec = (duration - TIME) % 60
  let min = Math.floor(((duration / 1000) - TIME) / 60)
  if ((duration / 1000) < TIME) {
    min = 0
  }

  timer.innerHTML = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  TIME++
  console.log('duration :>>', duration, TIME)
}

