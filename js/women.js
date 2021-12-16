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
