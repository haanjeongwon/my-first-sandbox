const box_1 = document.querySelectorAll('.box-1');
const box_2 = document.querySelectorAll('.box-2');
const box_3 = document.querySelectorAll('.box-3');

// box 1
for (const el of box_1) {
  el.classList.add('blue');
};

// box 2
box_2.forEach(element => element.classList.add('blue'));

// box 3
[].forEach.call(box_3, function($box) {
  $box.classList.add('blue');
});

// box 4
[].forEach.call(document.querySelectorAll('.box-4'), function($box) {
  $box.classList.add('blue');
});

// 결론: 유사 배열 객체(Array-like Objects)도 배열처럼 사용할 수 있다.