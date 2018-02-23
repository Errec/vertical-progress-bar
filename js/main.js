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
var currentZIndex = parseInt(window.getComputedStyle(card[0]).zIndex);

next.addEventListener('click', _.throttle(stepForward, THROTTLE_TIME));
back.addEventListener('click', _.throttle(stepBack, THROTTLE_TIME));

function stepForward() {
  if (step < MAX_ITEMS - 1) {
    currentZIndex++;
    next.classList.add('btn--click');
    toggleDisableBtn(next);
    bar.style.height = (++step * 10) + '%';
    barBullet.style.transform = 'rotate(' + 120 * step + 'deg)';
    renderPlaceholder();

    card[step].classList.add('list__item--translate');
    card[step].classList.toggle('list__item--selected');
    card[step - 1].classList.toggle('list__item--selected');
    setTimeout(function () {
      card[step].classList.remove('list__item--translate');
    }, 400);
    setTimeout(function () {
      card[step].style.zIndex = currentZIndex;
      next.classList.remove('btn--click');
    }, 200);
  }
}

function stepBack () {
  if (step > 0) {
    currentZIndex++;
    toggleDisableBtn(back);
    bar.style.height = (--step * 10) + '%';
    barBullet.style.transform = 'rotate(' + 120 * step + 'deg)';
    back.classList.add('btn--click');
    renderPlaceholder();

    card[step].classList.toggle('list__item--selected');
    card[step + 1].classList.toggle('list__item--selected');
    card[step].classList.add('list__item--translate');
    setTimeout(function () {
      card[step].classList.remove('list__item--translate');
    }, 400);
    setTimeout(function () {
      card[step].style.zIndex = currentZIndex;
      back.classList.remove('btn--click');
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
