const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsEl = document.createElement('li')
// ingredientsEl.textContent = ingredients[0]
// console.log(ingredientsEl.textContent = ingredients[3]);

// ingredients.forEach(ingredient=>)
const elements =[]
for (let i = 0; i < ingredients.length; i += 1){
  const listEl = document.createElement('li')
listEl.textContent = ingredients[i]
   elements.push(listEl)
  console.log(elements);

}

const ingredientsList = document.querySelector('#ingredients')
// console.log(ingredientsList);
ingredientsList.append(...elements)