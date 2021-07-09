const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

console.log(refs.input);
refs.input.addEventListener('input', onInputChange)

function onInputChange() {
    console.log(event.currentTarget.value);
    refs.output.textContent = event.currentTarget.value
    if (refs.input = '') {
      refs.output.textContent = 'незнакомец'   
    }
}

// refs.input.addEventListener('blur', onInputBlur)
// function onInputBlur() {
//     refs.output.textContent='незнакомец'
//     //  if (refs.input = '') {
//     //   refs.output.textContent = 'незнакомец'   
//     // }
//     console.log('потерял фокус');
// }