/*Jacket extreme men */
const addItem = document.querySelector(".add-men-ex");

addItem.addEventListener("click", addToCartPrice);
addItem.addEventListener("click", addToCartJacket);

function addToCartPrice() {
  localStorage.setItem("price", "2225,-");
}

function addToCartJacket() {
  localStorage.setItem("jacket", "Jacket extreme men's");
}
