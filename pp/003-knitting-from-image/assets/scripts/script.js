let image = document.getElementById('image');
let overlayCanvas = document.getElementById('overlayCanvas');
let overlayLayer = document.getElementById('overlayLayer');

let width = image.width;
let height = image.height;

overlayCanvas.width = width;
overlayCanvas.height = height;

let ctx = overlayCanvas.getContext('2d');
ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
ctx.drawImage(image, 0, 0, overlayCanvas.width, overlayCanvas.height);

let currentX = 0;
let currentY = 0;

function knitting() {
  let pixel = ctx.getImageData(currentX, currentY, 2, 2).data;
  let color = 'rgb(' + pixel[0] + ', ' + pixel[1] + ', ' + pixel[2] + ')';

  let newEl = document.createElement('ul');
  newEl.classList.add('block');
  newEl.innerHTML = `
    <li style="background: rgb(${pixel[0]} ,${pixel[1]} ,${pixel[2]});"></li>
    <li style="background: rgb(${pixel[4]} ,${pixel[5]} ,${pixel[6]});"></li>
    <li style="background: rgb(${pixel[8]} ,${pixel[9]} ,${pixel[10]});"></li>
    <li style="background: rgb(${255 - pixel[12]} ,${255 - pixel[13]} ,${255 - pixel[14]});"></li>
  `;
  overlayLayer.append(newEl);

  currentX += 20;
  if (currentX >= width) {
    currentX = 0;
    currentY += 10;
  };
};

window.addEventListener('mousemove', function(event) {
  knitting();
  knitting();
});

window.addEventListener('touchmove', function(event) {
  knitting();
});

window.addEventListener('resize', function() {
  width = image.width;
  height = image.height;

  overlayCanvas.width = width;
  overlayCanvas.height = height;

  let ctx = overlayCanvas.getContext('2d');
  ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  ctx.drawImage(image, 0, 0, overlayCanvas.width, overlayCanvas.height);

  if (currentX >= width) {
    currentX = 0;
    currentY += 10;
  };
});