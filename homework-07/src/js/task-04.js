let count=0
let counterValue = document.querySelector('#value')
console.log(counterValue);
const counter = document.querySelector('#counter')

const buttonIncrement = counter.lastElementChild
const buttonDecrement = counter.firstElementChild
const decrement = function(){count--, counterValue.textContent=count}
buttonDecrement.addEventListener('click', decrement)


const increment = function(){count++, counterValue.textContent=count}
buttonIncrement.addEventListener('click', increment )




