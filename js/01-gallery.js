import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const makeGalleryItems = (galleryItems) =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
      <div class="gallery__item">
        <a class="gallery__link" href=${original}>
          <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`,
    ''
  );

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', makeGalleryItems(galleryItems));


