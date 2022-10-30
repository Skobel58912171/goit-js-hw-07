import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryModal = document.querySelector(".gallery");
console.log(galleryModal);

galleryModal.addEventListener("click", modalOpen);

let instance;

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

galleryModal.insertAdjacentHTML("afterbegin", markup);

function modalOpen(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  // console.log("click");
  instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,

    {
      onShow: (instance) => {
        galleryModal.addEventListener("keydown", modalClose);
      },

      onClose: (instance) => {
        galleryModal.removeEventListener("keydown", modalClose);
      },
    }
  );
  instance.show();

  function modalClose(evt) {
    if (evt.code !== "Escape") {
      return;
    }

    instance.close();
    console.log("vjh");
  }
}
