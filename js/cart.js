/*Get items */
/*Men extreme */
document.querySelector(".item-price-men-ex").innerHTML +=
  localStorage.getItem("price");

document.querySelector(".jacket-men-ex").innerHTML +=
  localStorage.getItem("jacket");

/*Women extreme */
document.querySelector(".item-price-wo-ex").innerHTML +=
  localStorage.getItem("priceWoEx");

document.querySelector(".jacket-wo-ex").innerHTML +=
  localStorage.getItem("jacketWoEx");

/*Men active */
document.querySelector(".item-price-men-ac").innerHTML +=
  localStorage.getItem("priceMenAc");

document.querySelector(".jacket-men-ac").innerHTML +=
  localStorage.getItem("jacketMenAc");

/*Women active */
document.querySelector(".item-price-wo-ac").innerHTML +=
  localStorage.getItem("priceWoAc");

document.querySelector(".jacket-wo-ac").innerHTML +=
  localStorage.getItem("jacketWoAc");

/*Men thermo */
document.querySelector(".item-price-men-the").innerHTML +=
  localStorage.getItem("priceMenThe");

document.querySelector(".jacket-men-the").innerHTML +=
  localStorage.getItem("jacketMenThe");

/*Women thermo */
document.querySelector(".item-price-wo-the").innerHTML +=
  localStorage.getItem("priceWoThe");

document.querySelector(".jacket-wo-the").innerHTML +=
  localStorage.getItem("jacketWoThe");

/*Men sport */
document.querySelector(".item-price-men-spo").innerHTML +=
  localStorage.getItem("priceMenSpo");

document.querySelector(".jacket-men-spo").innerHTML +=
  localStorage.getItem("jacketMenSpo");

/*Women sport */
document.querySelector(".item-price-wo-spo").innerHTML +=
  localStorage.getItem("priceWoSpo");

document.querySelector(".jacket-wo-spo").innerHTML +=
  localStorage.getItem("jacketWoSpo");

/*Hide if has no value */

if (
  localStorage.getItem("price") === null &&
  localStorage.getItem("jacket") === null
) {
  document.querySelector(".item-price-men-ex").style.display = "none";
  document.querySelector(".jacket-men-ex").style.display = "none";
}

if (
  localStorage.getItem("priceWoEx") === null &&
  localStorage.getItem("jacketWoEx") === null
) {
  document.querySelector(".item-price-wo-ex").style.display = "none";
  document.querySelector(".jacket-wo-ex").style.display = "none";
}

if (
  localStorage.getItem("priceMenAc") === null &&
  localStorage.getItem("jacketMenAc") === null
) {
  document.querySelector(".item-price-men-ac").style.display = "none";
  document.querySelector(".jacket-men-ac").style.display = "none";
}

if (
  localStorage.getItem("priceWoAc") === null &&
  localStorage.getItem("jacketWoAc") === null
) {
  document.querySelector(".item-price-wo-ac").style.display = "none";
  document.querySelector(".jacket-wo-ac").style.display = "none";
}

if (
  localStorage.getItem("priceMenThe") === null &&
  localStorage.getItem("jacketMenThe") === null
) {
  document.querySelector(".item-price-men-the").style.display = "none";
  document.querySelector(".jacket-men-the").style.display = "none";
}

if (
  localStorage.getItem("priceWoThe") === null &&
  localStorage.getItem("jacketWoThe") === null
) {
  document.querySelector(".item-price-wo-the").style.display = "none";
  document.querySelector(".jacket-wo-the").style.display = "none";
}

if (
  localStorage.getItem("priceMenSpo") === null &&
  localStorage.getItem("jacketMenSpo") === null
) {
  document.querySelector(".item-price-men-spo").style.display = "none";
  document.querySelector(".jacket-men-spo").style.display = "none";
}

if (
  localStorage.getItem("priceWoSpo") === null &&
  localStorage.getItem("jacketWoSpo") === null
) {
  document.querySelector(".item-price-wo-spo").style.display = "none";
  document.querySelector(".jacket-wo-spo").style.display = "none";
}

/*Hide cart is empty */

if (
  localStorage.getItem("price") === null &&
  localStorage.getItem("jacket") === null &&
  localStorage.getItem("priceWoEx") === null &&
  localStorage.getItem("jacketWoEx") === null &&
  localStorage.getItem("priceMenAc") === null &&
  localStorage.getItem("jacketMenAc") === null &&
  localStorage.getItem("priceWoAc") === null &&
  localStorage.getItem("jacketWoAc") === null &&
  localStorage.getItem("priceMenThe") === null &&
  localStorage.getItem("jacketMenThe") === null &&
  localStorage.getItem("priceWoThe") === null &&
  localStorage.getItem("jacketWoThe") === null &&
  localStorage.getItem("priceMenSpo") === null &&
  localStorage.getItem("jacketMenSpo") === null &&
  localStorage.getItem("priceWoSpo") === null &&
  localStorage.getItem("jacketWoSpo") === null
) {
  document.querySelector(".currently-empty").style.display = "block";
} else {
  document.querySelector(".currently-empty").style.display = "none";
}

/*Empty cart */

document.querySelector(".empty-cart").addEventListener(
  "click",
  function () {
    localStorage.clear();
    location.reload();
  },
  false
);
