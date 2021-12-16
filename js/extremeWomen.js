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
