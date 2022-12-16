const URI_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

const getPokemon = function () {
  let pokemon = [];
  fetch(URI_POKEMON)
    .then((response) => response.json())
    .then((_pokemon) => _pokemon)
    .catch((error) => {
      throw new Error(error);
    });
};

const getPokemonByName = (pokemonName) => {
  fetch(URI_POKEMON)
    .then((result) => result.json())
    .then((pokemon) => {
      return pokemon;
    })
    .catch((error) => console.log(error));
};
export { getPokemon, getPokemonByName };
