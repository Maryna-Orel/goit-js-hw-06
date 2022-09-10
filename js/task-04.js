const counterValueEl = document.querySelector('#value');
let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

buttonIncrement.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});