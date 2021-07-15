// const inputField = document.querySelector(`#validation-input`);
// const maxInputValue = inputField.getAttribute(`data-length`);
// inputField.addEventListener(`input`, event => {
//   if (event.currentTarget.value.length == maxInputValue) {
//     document.querySelector(`#validation-input`).classList.remove(`invalid`);
//     document.querySelector(`#validation-input`).classList.add(`valid`);
//   } else {
//     document.querySelector(`#validation-input`).classList.remove(`valid`);
//     document.querySelector(`#validation-input`).classList.add(`invalid`);
//   }
// });



const input = document.querySelector("#validation-input")

const validationSymbolQuantity = Number(input.dataset.length)

function inputBlured(event) {

    if (event.currentTarget.value.length === validationSymbolQuantity) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        console.log(false);
        input.classList.add('invalid')
        input.classList.remove('valid')
    }

}