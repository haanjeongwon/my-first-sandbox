let hookFront = document.getElementById('hook-front');
let hookBack = document.getElementById('hook-back');

let attachFront = document.getElementById('attach-front');
let attachBack = document.getElementById('attach-back');

let previousFront, previousBack;

let contentsFront = [
  `
  <div class="part">0</div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-front"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-front"></div>`,
  `
  <div class="part">1</div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-front"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-front"></div>`,
  `
  <div class="part">2</div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-front"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-front"></div>`,
  `
  <div class="part">3</div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-front"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-front"></div>`
];

let contentsBack = [
  `
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-back"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-back"></div>`,
  `
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-back"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-back"></div>`,
  `
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div class="part" id="hook-back"></div>
  <div class="part"></div>
  <div class="part"></div>
  <div id="attach-back"></div>`
]

// scroll function
window.addEventListener('scroll', function() {

  // parallax scroll
  let currentPositionY = window.scrollY;
  document.querySelectorAll('.parallax').forEach(function(layer) {
    let speed = layer.getAttribute('data-speed');
    layer.style.marginTop = - currentPositionY * speed + 'px';
  });

  // infinite scroll
  let hookFrontPositionY = hookFront.getBoundingClientRect().top;
  let hookBackPositionY = hookBack.getBoundingClientRect().top;
  console.log('Front: ' + hookFrontPositionY + ', Back: ' + hookBackPositionY); //temp

  if (hookFrontPositionY <= 0) {
    attachFrontAction();
  };

  if (hookBackPositionY <= 0) {
    attachBackAction();
  };

});

// attach function - front
function attachFrontAction() {
  let currentNumber;
  do {
    currentNumber = random(0, contentsFront.length - 1);
  } while (currentNumber == previousFront);
  previousFront = currentNumber;
  attachFront.innerHTML = contentsFront[currentNumber];
  hookFront.removeAttribute('id');
  attachFront.removeAttribute('id');
  hookFront = document.getElementById('hook-front');
  attachFront = document.getElementById('attach-front');
};

// attach function - back
function attachBackAction() {
  let currentNumber;
  do {
    currentNumber = random(0, contentsBack.length - 1);
  } while (currentNumber == previousBack);
  previousBack = currentNumber;
  attachBack.innerHTML = contentsBack[currentNumber];
  hookBack.removeAttribute('id');
  attachBack.removeAttribute('id');
  hookBack = document.getElementById('hook-back');
  attachBack = document.getElementById('attach-back');
};

// random function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};