const knittingOption = {
  xMin: -10,
  xMax: 25,
  yMin: -50,
  yMax: 50,
  yOut: 100,
  yMinNL: -8,
  yMaxNL: 20,
  repeat: 20,
  interval: 60
};

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

// window.addEventListener('mousemove', function(event) {
//   knitting();
//   knitting();
// });

// window.addEventListener('touchmove', function(event) {
//   knitting();
// });

// resize event
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
    currentY += random(knittingOption.yMinNL, knittingOption.yMaxNL);
  };

  if (currentY >= height) {
    currentX = 0;
    currentY = 0;
  };
});


// click event
let intervalID;
let isRunning = false;

overlayCanvas.addEventListener('click', function() {
  if (isRunning) {
    clearInterval(intervalID);
    isRunning = false;
  } else {
    intervalID = setInterval(function() {
      for (let i = 0; i < knittingOption.repeat; i++) {
        knitting();
      };
    }, knittingOption.interval);
    isRunning = true;
  };
});

// knitting function
function knitting() {
  let pixel = ctx.getImageData(currentX, currentY, 2, 2).data;
  let color = 'rgb(' + pixel[0] + ', ' + pixel[1] + ', ' + pixel[2] + ')';

  let newEl = document.createElement('ul');
  newEl.classList.add('block');
  newEl.innerHTML = `
    <li style="background: rgb(${pixel[0]} ,${pixel[1]} ,${pixel[2]});">
    </li>
    <li style="background: rgb(${pixel[4]} ,${pixel[5]} ,${pixel[6]});">
      <div style="background: rgb(${255 - pixel[4]} ,${255 - pixel[5]} ,${255 - pixel[6]});"></div>
    </li>
    <li style="background: rgb(${pixel[8]} ,${pixel[9]} ,${pixel[10]});">
      <div style="background: rgb(${255 - pixel[8]} ,${255 - pixel[9]} ,${255 - pixel[10]});"></div>
    </li>
    <li style="background: rgb(${pixel[0]} ,${pixel[1]} ,${pixel[2]});">
      <div style="background: rgb(${255 - pixel[12]} ,${255 - pixel[13]} ,${255 - pixel[14]});"></div>
    </li>
  `;

  // let newEl = document.createElement('ul');
  // newEl.classList.add('block-number');
  // newEl.innerHTML = `
  //   <li style="background: rgb(${pixel[0]} ,${pixel[1]} ,${pixel[2]}); color: rgb(${pixel[0]} ,0 ,0);">${pixel[0]}</li>
  //   <li style="background: rgb(${pixel[0]} ,${pixel[1]} ,${pixel[2]}); color: rgb(0 ,${pixel[1]} ,0);">${pixel[1]}</li>
  //   <li style="background: rgb(${pixel[0]} ,${pixel[1]} ,${pixel[2]}); color: rgb(0 ,0 ,${pixel[2]});">${pixel[2]}</li>
  // `;

  overlayLayer.append(newEl);

  currentX += random(knittingOption.xMin, knittingOption.xMax);
  currentY += random(knittingOption.yMin, knittingOption.yMax);

  if (currentX >= width) {
    currentX = 0;
    currentY += random(knittingOption.yMinNL, knittingOption.yMaxNL);
  };

  if (currentY < 0) {
    currentY += knittingOption.yOut;
  };

  if (currentY >= height) {
    currentX = 0;
    currentY = 0;
  };
};

// random function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// download function
const button = document.getElementById('save');

button.addEventListener('click', function() {
  html2canvas(overlayLayer).then(function(canvas) {
    saveAs(canvas.toDataURL(), "capture.png");
  });
});

function saveAs(uri, filename) {
  let link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    //Firefox requires the link to be in the body
    document.body.appendChild(link);
    link.click();
    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  };
};