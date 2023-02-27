import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector(".gallery");

//=====================================================================
function createImageCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview} " alt="${description}" title="${description}"/>
</a> 

 `;
    }).join(' ');
};
//=====================================================================



const cardMarkup = createImageCardMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardMarkup)
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
// galleryContainer.addEventListener('click', onImageClick)


// //=====================================================================
// function onImageClick(event) {
   
//     blockStandardAction(event);

//    if (event.target.nodeName !== "IMG") {
//        return;
//     };
   

    
//         galleryContainer.addEventListener('keydown', (event) => {
//         if (event.code === "Escape") {
//         instance.close()
//         }
//             const currentActiveImage = document.querySelector('img[data-scale=""]');
// console.log(currentActiveImage);
// if (!currentActiveImage) {  
//   currentActiveImage.classList.toggle('.is-active');
// };
//     });
// //=====================================================================


// };

// function blockStandardAction(event) {
//     event.preventDefault();

// };



