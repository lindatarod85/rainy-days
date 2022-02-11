const singleJacketContainer = document.querySelector(".single-jacket");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://novadev.one/rainy-days-headless/wp-json/wc/store/products/" + id;


console.log(url);

async function fetchJacket(){
    try{
const response = await fetch(url);
const results = await response.json();

console.log(results);

createHTML(results);
    }
    catch(error){
        console.log(error);
    }
}

fetchJacket();

function createHTML(results){
    singleJacketContainer.innerHTML +=`<div class="jacket-container">
    
    <h1>${results.name}</h1>
    <div class="jacket-image-container">

    <img class="main-image" src="${results.images[0].src}" alt="${results.name}">
   
    <div class="thumbnails">
    <img src="${results.images[0].src}" onclick="change(this.src)" alt="${results.name}">
    <img src="${results.images[1].src}" onclick="change(this.src)" alt="${results.name}">
    <img src="${results.images[2].src}" onclick="change(this.src)" alt="${results.name}">
   <img src="${results.images[3].src}" onclick="change(this.src)" alt="${results.name}">
   </div>
    </div>


 <div class="jacket-info">  
<p class="jacket-categories"><span>Categories: </span>${results.categories[1].name}, ${results.categories[0].name}</p>

    <p class="short-description">${results.short_description}</p>

    <label for="select-options">${results.attributes[0].name}</label>
          <select name="select-options" id="select-options ">
            <option value="S">${results.variations[0].attributes[0].value}</option>
            <option value="M">${results.variations[1].attributes[0].value}</option>
            <option value="L">${results.variations[2].attributes[0].value}</option>
          </select>
   
    <p class="jacket-price"><span>Price:</span> ${results.prices.price},- ${results.prices.currency_code}</p>

    <button class="add">Add to Cart</button>

    

    
 </div>
 
 </div>
 `
}

/*Image thumbnail gallery function */

const change = (src) => {
    document.querySelector(".main-image").src = src;
  };
