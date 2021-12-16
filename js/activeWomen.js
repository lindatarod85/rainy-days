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
