let hookFront = document.getElementById('hook-front');
let hookBack = document.getElementById('hook-back');

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
  console.log('Front: ' + hookFrontPositionY + ', Back: ' + hookBackPositionY);

});