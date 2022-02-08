const url = "https://novadev.one/rainy-days-headless/wp-json/wc/store/products";

const jacketListContainer = document.querySelector(".list-of-jackets");

async function getJackets(){
    try {
        const response = await fetch(url);
        const results = await response.json();
        createHTML(results); 
        console.log(results);
    }
    catch(error) {
console.log(error);
    }
}

getJackets();

function createHTML(jacketList){
    jacketList.forEach(function(jacket){
        jacketListContainer.innerHTML += `<div class="jacket">
<img src="${jacket.images[0].src}" alt="${jacket.name}">
<h2>${jacket.name}</h2>
        </div>`;
        console.log(jacket);
    });

}