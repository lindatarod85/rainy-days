/*Jacket thermo women */
const addWoThe = document.querySelector(".add-wo-the");

addWoThe.addEventListener("click", addToCartWoThePrice);
addWoThe.addEventListener("click", addToCartWoTheJacket);

function addToCartWoThePrice() {
  localStorage.setItem("priceWoThe", "3225,-");
}

function addToCartWoTheJacket() {
  localStorage.setItem("jacketWoThe", "Jacket thermo women's");
}
