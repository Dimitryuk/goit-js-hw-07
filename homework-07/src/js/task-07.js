

const textElement = document.querySelector('#text');
console.log(textElement.style.fontSize);

const InputElement = document.querySelector('#font-size-control');

console.log(InputElement.value);

InputElement.addEventListener('input', element => {
  const size = InputElement.value;
  textElement.style.fontSize = size + 'px';
});

