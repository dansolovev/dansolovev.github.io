// Гамбургер
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        // console.log('asd');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navigation");
    nav.classList.toggle("navigation_sticky", window.scrollY > 150);
});

var isThemeLight = true
function changeTheme() {
    
// console.log('a')
  if (isThemeLight) {
    document.body.setAttribute('dark', '');
    isThemeLight = false
  } else {
    document.body.removeAttribute('dark');
    isThemeLight = true
  }
}

var radio = new Audio();
/*в место ссылки радио  ставь свой  audio.mp3*/
radio.src = "mirvok.mp3";

const playBtns = document.querySelectorAll('.play-btn');
const downloadBtns = document.querySelectorAll('.bottom_player-download');
const tracksDownloadBtns = document.querySelectorAll('.tracks__item-download');
const trackPageDownloadBtns = document.querySelectorAll('.btn_track-page-download');
const bottomPlayBtn = document.querySelector('.bottom_player__play');
const trackPagePlayBtn = document.querySelector('.btn_track-page-listen');
const volumeBtn = document.querySelector('.bottom_player-speaker');


var currItem = playBtns[0];
if (trackPagePlayBtn) {
  currItem = trackPagePlayBtn
  trackPagePlayBtn.addEventListener('click', function (e) {
    e.preventDefault()
    setInterval(currentTime, 1000);
    bottomPlayBtn.classList.toggle('play_pause');
    // console.log("plaay")
    if (radio.paused == true) {
      radio.play();
      currItem.classList.toggle('play_pause');
  
    } else {
      radio.pause();
      currItem.classList.toggle('play_pause');
    }
  });
}

bottomPlayBtn.addEventListener('click', function (e) {
  e.preventDefault()
  setInterval(currentTime, 1000);
  bottomPlayBtn.classList.toggle('play_pause');
  // console.log("plaay")
  if (radio.paused == true) {
    radio.play();
    currItem.classList.toggle('play_pause');

  } else {
    radio.pause();
    currItem.classList.toggle('play_pause');
  }
});
playBtns.forEach(item => {
  item.addEventListener('click', function (e) {
    setInterval(currentTime, 1000);
    e.preventDefault()
    document.querySelector('.bottom_player__play').classList.toggle('play_pause');
    // console.log("plaay")
    currItem = item
    if (radio.paused == true) {
      radio.play();
      // item.background = "var(--root-track-pause-button) center (center / 100%) no-repeat;";
      item.backgroundColor = "green";
      item.classList.toggle('play_pause');
  
    } else {
      radio.pause();
      // item.background = "var(--root-track-pause-button) center (center / 100%) no-repeat;";
      // item.backgroundColor = "green";
      item.classList.toggle('play_pause');
    }
  });
  // anchor.addEventListener('click', function (e) {
  //   e.preventDefault();
  // });
});

downloadBtns.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
downloadURI("mirvok.mp3", "mirvok")
  });
});

tracksDownloadBtns.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
downloadURI("mirvok.mp3", "mirvok")
  });
});

trackPageDownloadBtns.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
downloadURI("mirvok.mp3", "mirvok")
  });
});

var volume = true
volumeBtn.addEventListener('click', function (e) {
e.preventDefault()
volumeBtn.classList.toggle('play_pause');
if (volume) {
  radio.volume = 0
  volume = false
} else {
  radio.volume = 1
  volume = true
}
});

function currentTime() {
  // console.log(radio.duration)
  var str = String(Math.round(radio.currentTime))
  if (str.length == 1) {
    str = "0" + str
  }
  const percent = radio.currentTime / radio.duration
  document.querySelector('.bottom_player__track-fill').style.width = 100 * percent + "%"
  document.querySelector('.bottom_player-time').innerHTML = '0:' + str;
}

function downloadURI(uri, name) 
{
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

const categoriesBtns = document.querySelectorAll('.categoriesLink')
categoriesBtns.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('.loading-layer').style.display = 'block'
    setTimeout(() => {
      document.querySelector('.loading-layer').style.display = 'none'
      window.open("categories.html","_self")
    }, "1000")
  });
});