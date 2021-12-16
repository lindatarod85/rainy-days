/*Jacket sport women */
const addWoSpo = document.querySelector(".add-wo-spo");

addWoSpo.addEventListener("click", addToCartWoSpoPrice);
addWoSpo.addEventListener("click", addToCartWoSpoJacket);

function addToCartWoSpoPrice() {
  localStorage.setItem("priceWoSpo", "2099,-");
}

function addToCartWoSpoJacket() {
  localStorage.setItem("jacketWoSpo", "Jacket sport women's");
}
