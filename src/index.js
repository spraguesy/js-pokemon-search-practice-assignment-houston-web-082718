document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE
  document.getElementById('pokemon-search-form').addEventListener('input', (e) => {
    filterPokemon(e.target.form.children.search.value)
  })

  displayPokemon(POKEMON);

})

const filterPokemon = str => {
  let foundPokemon;
  if (str.length > 0) {
    foundPokemon = POKEMON.filter(poke => {
      return poke.name.includes(str.toLowerCase())
    })
  } else {
    foundPokemon = POKEMON;
  }

  if (foundPokemon.length > 0) {
    displayPokemon(foundPokemon)
  } else {
    noPokemon();
  }

}

function displayPokemon(arr) {
  pokemonContainer = document.getElementById('pokemon-container');
  pokemonContainer.innerHTML = "";
  arr.forEach(p => {
    pokemonContainer.innerHTML += (
      `<div class="pokemon-container">
        <div class="pokemon-frame">
          <h1 class="center-text">${p.name}</h1>
          <div class="image-container">
            <div class="pokemon-image">
              <img src="${p.sprites.front}">
              </div>
          </div>
        </div>
      </div>`
    );
  });
}

const noPokemon = () => {
  pokemonContainer = document.getElementById('pokemon-container');
  pokemonContainer.innerHTML = `<p><center>There are no Pokémon here</center></p>`
}