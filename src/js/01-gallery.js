import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const container = document.querySelector(".gallery");
createGelaryCard(galleryItems);

container.addEventListener("click", onConteinerClick);

function onConteinerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });

  
}

function createGelaryCard(imgs) {
  const marcup = imgs
    .map(({ original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image description"
          />
        </a>
      </div> `;
    })
    .join("");

  container.insertAdjacentHTML("beforeend", marcup);
}

