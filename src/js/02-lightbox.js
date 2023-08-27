import { galleryItems } from './gallery-items.js';
// Change code below this line
//import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgCards = createImgCards(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgCards);
//gallery.addEventListener('click', onImgCardClick);
function createImgCards(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `  <li class="gallery__item">
                       <a class="gallery__link" href="${original}">
                         <img class="gallery__image" src="${preview}" alt="${description}" />
                       </a>
                 </li> 
               `
    }).join('');

}
 
const lightbox = new SimpleLightbox('.gallery a', {
   captionsData: 'alt',
    captionDelay: 250,
 });