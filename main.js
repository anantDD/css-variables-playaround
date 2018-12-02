const root = document.documentElement;
const range = document.querySelector('.booth-slider');

range.addEventListener('input', handleSlider);

function handleSlider(e) {
  let value = e.target.value;
  root.style.setProperty('--slider', value);
}

const boxes = document.querySelectorAll('.color-box>input');

boxes.forEach((input) => {
  input.addEventListener('input', handleInputChange);
});

function handleInputChange(e) {
  let value = e.target.value;
  let inputID = e.target.parentNode.id;
  let inputBg = `--bg-${inputID}`;
  root.style.setProperty(inputBg, value);
}