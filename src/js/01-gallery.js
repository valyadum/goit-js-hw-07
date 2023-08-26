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
    console.log(event.target.alt);
    const item = `<img width="1400" height="900" src="${event.target.dataset.source}" alt = "${event.target.alt}">`;
    const instance = basicLightbox.create(item);
    instance.show();
    window.addEventListener('keydown', (event) => {
        
        if (event.code === 'Escape') {
           console.log(event); 
            instance.close();
        }
    })
}
// function closeLightbox() {
//     instance.close()
// }
// function showLightBox(event) {
//     console.log(event.target);
//      basicLightbox.create(`
// 		<img width="1400" height="900" src="${galleryItems.original}">
// 	 `).show()
// }

