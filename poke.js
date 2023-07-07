//DOM
const $pokeCarts = document.getElementById('poke-carts')

document.addEventListener('DOMContentLoaded',viewPokemons);

function viewPokemons(){
    for(var i =1; i<31; i++){
        apiPokemon(i);
    }
}

function apiPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
        .then(result => result.json())
        .then(data => viewPokemon(data))
}


function viewPokemon(poke){
    const name = poke.forms[0].name.toUpperCase();
    const height = poke.height;
    const weight = poke.weight;
    const img_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`

    let html=`
            <div class="card" style="width: 18rem;">
                <img src="${img_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text"><b>${name}</b></p>
                    <p class="card-text"><b>Height</b><br>${height}</p>
                    <p class="card-text"><b>Weight</b><br>${weight}</p>
                </div>
            </div>`;

    $pokeCarts.insertAdjacentHTML('beforeend',html) 
}