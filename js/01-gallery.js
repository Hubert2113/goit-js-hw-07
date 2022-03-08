import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const $gallery = document.querySelector("div.gallery");
for (const galleryItem of galleryItems) {
  const $galleryBox = document.createElement("div");
  $galleryBox.classList.add("gallery__item");

  const $galleryLink = document.createElement("a");
  $galleryLink.classList.add("gallery__link");
  $galleryLink.href = galleryItem.original;

  const $galleryImage = document.createElement("img");
  $galleryImage.classList.add("gallery__image");
  $galleryImage.src = galleryItem.preview;
  $galleryImage.dataset.source = galleryItem.original;
  $galleryImage.alt = galleryItem.description;

  $gallery.append($galleryBox);
  $galleryBox.append($galleryLink);
  $galleryLink.append($galleryImage);
}

let instance = null;

$gallery.addEventListener("click", (ev) => {
  if (ev.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`
    <img
      src="${ev.target.dataset.source}"
      width="800"
      height="600"
    />
`);
  instance.show();
  ev.preventDefault();
});

document.addEventListener("keydown", ({ key }) => {
  if (key === "Escape") {
    instance.close();
  }
});
