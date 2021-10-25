// 탭 관련
const clockContainer = document.querySelector(".tabcontent");
var duration
var setduration

function openTab(evt, option) {
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(option).style.display = "block";
  evt.currentTarget.className += " active";

  // set timer
  if (option === 'timer') {
    setduration = Number(prompt('타이머를 몇분으로 설정하시겠습니까?'))
    duration = setduration * 60 * 1000;
    timer.innerHTML = `${setduration < 10 ? `0${setduration}` : setduration}:00`;
    console.log('duration :>>', duration)
  }
}
