/* eslint-disable default-param-last */
import actionTypes from '../actions/actionTypes';

function pokemonsReducer(pokemons = [], action) {
  const newpokemons = [...pokemons];
  if (action.type === actionTypes.LOAD_POKEMONS) {
    return [...newpokemons, action.pokemon];
  }
  return newpokemons;
}

export default pokemonsReducer;
