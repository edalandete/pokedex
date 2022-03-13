const urlGeneration = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

function fetchPokemonData({ url }) {
  return fetch(url)
    .then((response) => response.json())
    .then((pokeData) => pokeData);
}

export default function fetchFirstGenerationPokemon() {
  return fetch(urlGeneration)
    .then((response) => response.json())
    // eslint-disable-next-line max-len
    .then((allpokemon) => Promise.all(allpokemon.results.map(async (pokemon) => fetchPokemonData(pokemon))));
}
