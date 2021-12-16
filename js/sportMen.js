/*Jacket sport men */
const addMenSpo = document.querySelector(".add-men-spo");

addMenSpo.addEventListener("click", addToCartMenSpoPrice);
addMenSpo.addEventListener("click", addToCartMenSpoJacket);

function addToCartMenSpoPrice() {
  localStorage.setItem("priceMenSpo", "2099,-");
}

function addToCartMenSpoJacket() {
  localStorage.setItem("jacketMenSpo", "Jacket sport men's");
}
