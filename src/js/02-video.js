import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', changeTime);
ResumesTime();
function changeTime(data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayers-current-time', data.seconds);
}

function ResumesTime() {
  const saveTime = localStorage.getItem('videoplayers-current-time');
  if (saveTime) {
    player.setCurrentTime(saveTime);
  }
}



