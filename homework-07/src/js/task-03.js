const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('#gallery')
//console.log(galleryList);

//galleryList.insertAdjacentHTML('beforeEnd', '<li>  <img>  </img></li>')
const makingGallery = ({url , alt}) => {
  return ` <img src= ${url} alt='${alt}'>`
}

//console.log(makingGallery(images[1]));

const importGallery = images.map(makingGallery).join('')
console.log(importGallery);
galleryList.insertAdjacentHTML("beforeend", importGallery  )

const addingStyles = document.querySelector('#gallery')

console.log(addingStyles);
addingStyles.classList.add('grid')