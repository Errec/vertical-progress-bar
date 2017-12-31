var next              = document.querySelector('.btns__next');
var back              = document.querySelector('.btns__back');
var bar               = document.querySelector('.progress__bar');
var placeholders      = document.querySelectorAll('.progress__bullet-placeholder-item');
var placeholderBullet = document.querySelectorAll('.progress__bullet-placehoder');
var barBullet         = document.querySelector('.progress__bar-bullet');

var MAX_ITEMS = placeholders.length;
var THROTTLE_TIME = 400;
var step      = 0;

next.addEventListener('click', _.throttle(stepForward, THROTTLE_TIME));
back.addEventListener('click', _.throttle(stepBack, THROTTLE_TIME));

function stepForward() {
  if (step < MAX_ITEMS - 1) {
    toggleDisableBtn(next);
    bar.style.height = (++step * 10) + '%';
    barBullet.style.transform = 'rotate(' + 120 * step + 'deg)';
    renderPlaceholder();
  }
}

function stepBack () {
  if (step > 0) {
    toggleDisableBtn(back);
    bar.style.height = (--step * 10) + '%';
    barBullet.style.transform = 'rotate(' + 120 * step + 'deg)';
    renderPlaceholder();
  }
}

function renderPlaceholder () {
  Array.prototype.forEach.call(placeholderBullet, function(element, index) {
    if (index < step) {
      element.classList.add('progress__bullet-placehoder--hide');
    } else {
      element.classList.remove('progress__bullet-placehoder--hide');
    }
  });
}

function toggleDisableBtn (btn) {
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, THROTTLE_TIME)
}
