// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);

const divEl = document.querySelector('.gallery');

const cardsMarkup = createGalleryItems(galleryItems);

divEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
            </a>
        `
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250 });