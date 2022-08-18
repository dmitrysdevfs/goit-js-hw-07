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
galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImg = evt.target.dataset.source;

  const modalSelectedImg = basicLightbox.create(`
    <img src=${selectedImg} width="800" height="600">
  `);
  modalSelectedImg.show();

  if (modalSelectedImg.visible) {
    window.addEventListener('keydown', closeModalPressOnEcs);

    function closeModalPressOnEcs(evt) {
      if (evt.code === 'Escape') {
        modalSelectedImg.close();
        window.removeEventListener('keydown', closeModalPressOnEcs);
      }
    }
  }
}
