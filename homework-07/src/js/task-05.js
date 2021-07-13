const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

console.log(refs.input);
refs.input.addEventListener('input', onInputChange)

function onInputChange() {
    if (refs.input.value !== '') {
        refs.output.textContent = event.currentTarget.value
    } else {
        refs.output.textContent = "незнакомец"
    }
}


