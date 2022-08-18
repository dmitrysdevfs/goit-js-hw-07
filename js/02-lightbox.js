import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeGalleryItems = (galleryItems) =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <a class="gallery__item" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          alt=${description}
        />
      </a>`,
    ''
  );

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', makeGalleryItems(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  // captionPosition: 'bottom',
  captionDelay: 250,
});
