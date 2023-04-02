import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

window.onload = () => {
  if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  } else {
    player.setCurrentTime(0);
  }
};

player.on('timeupdate', throttle(({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000));
