const save = document.getElementById('save');
save.addEventListener('click', function() {
  html2canvas(document.getElementById('canvas')).then(canvas => {
    // document.body.appendChild(canvas)
    let el = document.createElement('a');
    el.href = canvas.toDataURL('image/jpeg');
    el.download = 'Bubble.jpg';
    el.click();
  });
});