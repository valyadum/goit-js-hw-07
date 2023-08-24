import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgCards = createImgCards(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgCards);
gallery.addEventListener('click', onImgCardClick);
//const imgLink = document.querySelector('gallery__link');
//imgLink.preventDefault();
function createImgCards(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `   <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>`
    }).join('');

}
function onImgCardClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log("img");
}

const imageInstance = basicLightbox.creat(document.querySelector('.gallery__image'));
document.querySelector('.gallery__image').onclick = imageInstance.show;
