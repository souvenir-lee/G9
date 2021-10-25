//stopWatch : 0부터 시작하여 경과시간을 확인
let stTime = 0
let endTime = 0
let timerStart

let min
let sec
let milisec

const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const recordList = document.getElementById('recordList')

startBtn.addEventListener('click', function () {
  // RECORD
  if (this.innerText == 'RECORD' && milisec) {
    console.log(min, sec, milisec)
    var li = document.createElement('li')
    li.style.color = "#fff"
    li.innerText = min + ' : ' + sec + ' : ' + milisec
    if (!recordList.firstChild) {
      recordList.append(li)
    } else {
      recordList.insertBefore(li, recordList.firstChild)
    }
    return false
  }
  this.innerText = 'RECORD'
  if (!stTime) {
    stTime = Date.now() // 최초 START
  } else {
    stopBtn.innerText = 'STOP'
    stTime += (Date.now() - endTime) // RESTART
  }
  timerStart = setInterval(function () {
    var nowTime = new Date(Date.now() - stTime)
    min = addZero(nowTime.getMinutes())
    sec = addZero(nowTime.getSeconds())
    milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))
    document.getElementById('postTestMin').innerText = min
    document.getElementById('postTestSec').innerText = sec
    document.getElementById('postTestMilisec').innerText = milisec
  }, 1)
})
stopBtn.addEventListener('click', function () {
  if (timerStart) {
    clearInterval(timerStart) // STOP
    if (this.innerText == 'STOP') {
      endTime = Date.now()
      this.innerText = 'RESET'
      startBtn.innerText = 'RESTART'
    } else { // RESET
      stTime = 0
      min = 0
      sec = 0
      milisec = 0
      document.getElementById('postTestMin').innerText = '00'
      document.getElementById('postTestSec').innerText = '00'
      document.getElementById('postTestMilisec').innerText = '00'
      startBtn.innerText = 'START'
      this.innerText = 'STOP'
      timerStart = null
      recordList.innerHTML = ''
    }
  }
})
function addZero(num) {
  return (num < 10 ? '0' + num : '' + num)
}


// let time = 0;
// let stopWatch;
// const stopWatchTime = clockContainer.querySelector('.stopWatchTime');

// function init() {
//   stopWatchTime.innerHTML = "00:00.00";
// }

// function startStopWatcher() {
//   console.log('시작')
//   let min = 0;
//   let sec = 0;
//   let milSec = 0;

//   if (time === 0) {
//     init();
//   }

//   stopWatch = setInterval(function () {
//     time++;

//     min = Math.floor(sec / 60);
//     sec = Math.floor(time / 60);
//     milSec = time % 60;

//     var tm = min;
//     var ts = sec;
//     var tms = milSec;
//     if (tm < 10) {
//       tm = "0" + min;
//     }
//     if (ts < 10) {
//       ts = "0" + sec;
//     }
//     if (tms < 10) {
//       tms = "0" + milSec;
//     }

//     stopWatchTime.innerHTML = tm + ":" + ts + "." + tms;
//   }, 10);
// }

// function pasuseStopWatcher() {
//   if (time !== 0) {
//     console.log('멈춤')
//     clearInterval(stopWatch);
//   }
// }

// function stopStopWatcher() {
//   if (time !== 0) {
//     console.log('멈춤')
//     clearInterval(stopWatch);
//     time = 0;
//     init();
//   }
// }

//timer
// var timerTime = document.querySelector(".timerTime")
// var timer
// function start() {
//   timer = setInterval(() => {
//     const date = new Date();
//     const min = date.getMinutes();
//     const hour = date.getHours();
//     const sec = date.getSeconds();
//     timerTime.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
//   }, 1000)
// }

// function stop() {
//   clearInterval(timer);
// }