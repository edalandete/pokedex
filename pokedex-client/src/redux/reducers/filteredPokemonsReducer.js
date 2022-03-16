import actionTypes from '../actions/actionTypes';

// eslint-disable-next-line default-param-last
function filteredPokemonsReducer(filteredPokemons = [], action) {
  const newPokes = [...filteredPokemons];
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      return action.pokemons;
    case actionTypes.FILTER_POKEMONS:
      return action.filteredPokemons;
    default:
      return newPokes;
  }
}

export default filteredPokemonsReducer;
