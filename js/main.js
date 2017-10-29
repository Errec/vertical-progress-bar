var next         = document.querySelector('.btns__next');
var back         = document.querySelector('.btns__back');
var bullet       = document.querySelector('.progress__bullet');
var placeHolders = document.querySelectorAll('.progress__bullet-placeholder-item');

var MAX_ITEMS = placeHolders.length;
var START_H   = 1;

var step = 0;

next.addEventListener('click', stepForward);
back.addEventListener('click', stepBack);

function stepForward() {
  if (step < MAX_ITEMS - 1) {
    bullet.style.top = (++step * 10 + START_H) + '%';
  }
}

function stepBack() {
  if (step > 0) {
    bullet.style.top = (--step * 10 + START_H) + '%';
  }
}
