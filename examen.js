async function pokemons (){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151'); 
    const responseJson = await response.json(); 
    console.log(responseJson); 
    return responseJson.results;
}


window.onload = async function() {
    const pokemonstotal = await pokemons();
    console.log(pokemonstotal);
    const pokemonlist = document.getElementById('pokemon-list');
    console.log(pokemonlist);
    for (const pokemon of pokemonstotal){
        const pokemonItem = document.createElement('li');
        pokemonItem.innerText = pokemon.name; 
        pokemonlist.appendChild(pokemonItem);
    }
}

const fetchPokemons = async () => {
    for (let i=1; i <= 151; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
}


