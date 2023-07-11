const input = document.getElementById('input');
const resultInput = document.getElementById('result-input');
const textarea = document.getElementById('textarea');
const resultTextarea = document.getElementById('result-textarea');

function addElementInput(a) {
  let inputElement = document.createElement(a);
  inputElement.textContent = input.value;
  resultInput.appendChild(inputElement);
};

function addElementTextarea(a) {
  let inputElement = document.createElement(a);
  inputElement.textContent = textarea.value;
  resultTextarea.appendChild(inputElement);
};