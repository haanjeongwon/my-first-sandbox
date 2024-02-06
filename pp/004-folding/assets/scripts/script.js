const noFold = document.getElementById('no-fold');
const fold = document.getElementsByClassName('fold');

noFold.addEventListener('click', function() {
  fold[0].classList.add('show');
  setTimeout(() => fold[1].classList.add('show'), 400);
  setTimeout(() => fold[2].classList.add('show'), 800);
});