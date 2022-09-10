function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', onBtnCreateClick);
btnDestroyEl.addEventListener('click', onBtnDestroyClick);

function onBtnCreateClick() {
  const inputEl = document.querySelector('input');
  const inputValue = Number(inputEl.value);
    createBoxes(inputValue);
  };

  function onBtnDestroyClick() {
    boxesEl.innerHTML = '';
  };

  function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
      const markup = `<div style = 'background-color: ${getRandomHexColor()}; width: ${30 + i * 10}px; height:${30 + i * 10}px'></div>`;
      boxesEl.insertAdjacentHTML('beforeend', markup);
    }
  };

