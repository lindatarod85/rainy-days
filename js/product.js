/*let imageGallery = [
  "images/closeup1.png",
  "images/closeup2.png",
  "images/closeup3.png",
  "images/jacket-extreme-men.jpg",
];

const arrow = document.querySelector(".fa-arrow-right");
const imageContainer = document.querySelector(".product-image-large");

arrow.addEventListener("click", function () {
  for (i = 0; i < imageGallery.length; i++) {
    imageContainer.src = imageGallery[i];
  }
});*/

const change = (src) => {
  document.querySelector(".product-image-large").src = src;
};
