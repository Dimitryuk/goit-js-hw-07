const categoriesCount = document.querySelectorAll('.item');
console.log(`В списке ${categoriesCount.length} категории.`);

const listEl = document.querySelectorAll(' ul li ul ');
//console.log(listEl);

const length = document.querySelector('.item').children.length;

// console.log(length);

const titles = document.querySelectorAll('h2');
const names = titles.forEach(name => {
  console.log(`Категория: ${name.outerText}`);
  console.log(
    `Количество элементов: ${name.parentNode.querySelectorAll('li').length}`
  );
});
