var next              = document.querySelector('.btns__next');
var back              = document.querySelector('.btns__back');
var bar               = document.querySelector('.progress__bar');
var placeholders      = document.querySelectorAll('.progress__bullet-placeholder-item');
var placeholderBullet = document.querySelectorAll('.progress__bullet-placehoder');
var barBullet         = document.querySelector('.progress__bar-bullet');
var card              = document.querySelectorAll('.list__item');

var MAX_ITEMS     = placeholders.length;
var THROTTLE_TIME = 400;
var step          = 0;

next.addEventListener('click', _.throttle(stepForward, THROTTLE_TIME));
back.addEventListener('click', _.throttle(stepBack, THROTTLE_TIME));

function stepForward() {
  if (step < MAX_ITEMS - 1) {
    toggleDisableBtn(next);
    bar.style.height = (++step * 10) + '%';
    barBullet.style.transform = 'rotate(' + 120 * step + 'deg)';
    renderPlaceholder();

    card[step].classList.add('list__item--translate');
    setTimeout(function () {
      card[step].classList.remove('list__item--translate');
    }, 400);
    setTimeout(function () {
      card[step].style.zIndex = parseInt(window.getComputedStyle(card[step]).zIndex) + step;
    }, 200);
  }
}

function stepBack () {
  if (step > 0) {
    toggleDisableBtn(back);
    bar.style.height = (--step * 10) + '%';
    barBullet.style.transform = 'rotate(' + 120 * step + 'deg)';
    renderPlaceholder();

    card[step].classList.add('list__item--translate');
    setTimeout(function () {
      card[step].classList.remove('list__item--translate');
    }, 400);
    setTimeout(function () {
      card[step + 1].style.zIndex = parseInt(window.getComputedStyle(card[step]).zIndex) - step - 1;
    }, 200);
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
