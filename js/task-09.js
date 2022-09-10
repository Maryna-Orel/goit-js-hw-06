function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.body;

btnEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  const bodyColor = bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyColor;
};

