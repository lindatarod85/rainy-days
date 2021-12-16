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
