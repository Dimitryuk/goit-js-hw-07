const inputField = document.querySelector(`#validation-input`);
const maxInputValue = inputField.getAttribute(`data-length`);
inputField.addEventListener(`input`, event => {
  if (event.currentTarget.value.length == maxInputValue) {
    document.querySelector(`#validation-input`).classList.remove(`invalid`);
    document.querySelector(`#validation-input`).classList.add(`valid`);
  } else {
    document.querySelector(`#validation-input`).classList.remove(`valid`);
    document.querySelector(`#validation-input`).classList.add(`invalid`);
  }
});
