/*Jacket thermo men */
const addMenThe = document.querySelector(".add-men-the");

addMenThe.addEventListener("click", addToCartMenThePrice);
addMenThe.addEventListener("click", addToCartMenTheJacket);

function addToCartMenThePrice() {
  localStorage.setItem("priceMenThe", "3225,-");
}

function addToCartMenTheJacket() {
  localStorage.setItem("jacketMenThe", "Jacket thermo men's");
}

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
