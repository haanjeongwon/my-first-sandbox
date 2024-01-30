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

window.addEventListener('mousemove', function(event) {
  // let x = event.offsetX;
  // let y = event.offsetY;
  // let pixelData = ctx.getImageData(x, y, 1, 1).data;
  // let color = 'rgb(' + pixelData[0] + ', ' + pixelData[1] + ', ' + pixelData[2] + ')';
  console.log(currentX + ', ' + currentY);

  let pixel = ctx.getImageData(currentX, currentY, 1, 1).data;
  let color = 'rgb(' + pixel[0] + ', ' + pixel[1] + ', ' + pixel[2] + ')';

  let newEl = document.createElement('div');
  newEl.classList.add('part');
  newEl.style.backgroundColor = color;
  overlayLayer.append(newEl);

  currentX += 10;
  if (currentX >= width) {
    currentX = 0;
    currentY += 10;
  };
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