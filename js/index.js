/*Add items to cart */

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

/*Jacket extreme women */
const addWoEx = document.querySelector(".add-wo-ex");

addWoEx.addEventListener("click", addToCartWoExPrice);
addWoEx.addEventListener("click", addToCartWoExJacket);

function addToCartWoExPrice() {
  localStorage.setItem("priceWoEx", "2225,-");
}

function addToCartWoExJacket() {
  localStorage.setItem("jacketWoEx", "Jacket extreme women's");
}

/*Jacket active men */
const addMenAc = document.querySelector(".add-men-ac");

addMenAc.addEventListener("click", addToCartMenAcPrice);
addMenAc.addEventListener("click", addToCartMenAcJacket);

function addToCartMenAcPrice() {
  localStorage.setItem("priceMenAc", "1899,-");
}

function addToCartMenAcJacket() {
  localStorage.setItem("jacketMenAc", "Jacket active men's");
}

/*Jacket active women */
const addWoAc = document.querySelector(".add-wo-ac");

addWoAc.addEventListener("click", addToCartWoAcPrice);
addWoAc.addEventListener("click", addToCartWoAcJacket);

function addToCartWoAcPrice() {
  localStorage.setItem("priceWoAc", "1899,-");
}

function addToCartWoAcJacket() {
  localStorage.setItem("jacketWoAc", "Jacket active women's");
}
