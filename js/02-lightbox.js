import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryModal = document.querySelector(".gallery");
// console.log(galleryModal);

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join("");
galleryModal.insertAdjacentHTML("afterbegin", markup);
// console.log(galleryModal);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function (evt) {});
