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
