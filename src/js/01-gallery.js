// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryCont = document.querySelector('.gallery')



function galleryMarkup(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
        return `
        <li>
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a> 
        </li>
        `;
    })
    .join('');
};

galleryCont.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

    const lightbox = new SimpleLightbox('.gallery a', {
         captionsData: "alt", 
         captionDelay: 250 
        });

        
console.log(galleryItems);
