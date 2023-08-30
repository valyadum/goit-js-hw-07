import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgCards = createImgCards(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgCards);
gallery.addEventListener('click', onImgCardClick);
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
    if (event.target.nodeName !==  "IMG") {
        return;
    }
    const item = `<img width="1400" height="900" src="${event.target.dataset.source}" alt = "${event.target.alt}">`;
    const instance = basicLightbox.create(item, {
        onShow: (instance) => {
            window.addEventListener('keydown', closeLightbox);
        },
        onClose: (instance) => {
            window.removeEventListener('keydown', closeLightbox);
        }
    });
    instance.show();


    function closeLightbox(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}