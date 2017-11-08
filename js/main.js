var next              = document.querySelector('.btns__next');
var back              = document.querySelector('.btns__back');
var bar               = document.querySelector('.progress__bar');
var placeholders      = document.querySelectorAll('.progress__bullet-placeholder-item');
var placeholderBullet = document.querySelectorAll('.progress__bullet-placehoder');

var MAX_ITEMS = placeholders.length;
var step      = 0;

next.addEventListener('click', stepForward);
back.addEventListener('click', stepBack);

function stepForward() {
  if (step < MAX_ITEMS - 1) {
    bar.style.height = (++step * 10) + '%';
  }
  renderPlaceholder();
}

function stepBack() {
  if (step > 0) {
    bar.style.height = (--step * 10) + '%';
  }
  renderPlaceholder();
}

function renderPlaceholder() {
  Array.prototype.forEach.call(placeholderBullet, function(element, index) {
    if (index < step) {
      element.classList.add('progress__bullet-placehoder--hide');
    } else {
      element.classList.remove('progress__bullet-placehoder--hide');
    }
  });
}
