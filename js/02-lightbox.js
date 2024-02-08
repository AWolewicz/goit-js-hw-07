import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryItem = galleryItems.map((item) => `<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
</a>
</div>`).join("");

galleryList.innerHTML = galleryItem

const simplelightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt"
})