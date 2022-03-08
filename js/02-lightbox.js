import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const $gallery = document.querySelector("ul.gallery");

galleryItems.forEach((galleryItem) => {
  const $galleryBox = document.createElement("a");
  $galleryBox.classList.add("gallery__item");
  $galleryBox.href = galleryItem.original;

  const $galleryImage = document.createElement("img");
  $galleryImage.classList.add("gallery__image");
  $galleryImage.src = galleryItem.preview;
  $galleryImage.alt = galleryItem.description;

  $gallery.append($galleryBox);
  $galleryBox.append($galleryImage);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

$gallery.addEventListener("click", (ev) => {
  if (ev.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open(ev.target);
  ev.preventDefault();
});
