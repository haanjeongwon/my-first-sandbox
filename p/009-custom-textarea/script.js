const wrap = document.getElementsByClassName('wrap');
const textarea = document.getElementsByClassName('textarea');
const nav = document.getElementsByClassName('nav');
const textSize = document.getElementsByClassName('text-size');

// for (let i = 0; i < wrap.length; i++) {
//   wrap[i].addEventListener('mouseover', function() {
//     console.log('Hello');
//   });
// };

// for (let box of wrap) {
//   box.addEventListener('mouseover', function() {
//     console.log('Hi');
//   });
// };

for (let i = 0; i < wrap.length; i++) {
  wrap[i].addEventListener('mouseover', function() {
    wrap[i].classList.add('over');
    textarea[i].classList.add('over');
    nav[i].classList.add('over');
  });
  wrap[i].addEventListener('mouseout', function() {
    wrap[i].classList.remove('over');
    textarea[i].classList.remove('over');
    nav[i].classList.remove('over');
  });
  textSize[i].addEventListener('change', function() {
    textarea[i].style.fontSize = textSize[i].value + 'px';
  });
};