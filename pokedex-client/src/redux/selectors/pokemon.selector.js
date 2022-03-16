export const getPokemonByName = (pokemons, name) => pokemons.find((pokemon) => name === `${pokemon.name}`);

export const getPokemonAbilities = ({ abilities }) => {
  const pokemonAbilities = abilities.map((ability) => ability.ability.name);
  return pokemonAbilities || ['No abilities found'];
};
export const getPokemonTypes = ({ types }) => {
  const pokemonTypes = types.map((type) => type.type.name);
  return pokemonTypes || ['No types found'];
};
