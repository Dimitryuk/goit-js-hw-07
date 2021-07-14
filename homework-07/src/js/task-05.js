const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

console.log(refs.input);

function inputChange(event) {
  if (refs.input.value !== '') {
    refs.output.textContent = event.currentTarget.value;
  } else {
    refs.output.textContent = 'незнакомец';
  }
}

refs.input.addEventListener('input', inputChange);
