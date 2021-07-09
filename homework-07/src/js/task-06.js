let inputEl = document.querySelector('#validation-input');

let inputLength = inputEl.dataset.length;
console.log(inputEl);

const input = document.querySelector('input');
inputEl.addEventListener('change', element => {
  const text = element.target.value;

  if (text.length === inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});