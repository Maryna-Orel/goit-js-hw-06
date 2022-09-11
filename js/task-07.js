const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
spanEl.style.fontSize = `${Number(inputEl.value)}px`;

inputEl.addEventListener('input', (event) => {
    spanEl.style.fontSize = `${Number(event.currentTarget.value)}px`;
});


