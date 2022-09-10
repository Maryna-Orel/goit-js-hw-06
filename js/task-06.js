const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", (event) => {
  const isValid =
    event.currentTarget.value.length === Number(inputEl.dataset.length);
  if (isValid) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
console.log(inputEl);