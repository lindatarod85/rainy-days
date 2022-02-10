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
   

    <p><span>Price ${results.price}</span></p>

    
    </div>`
}
