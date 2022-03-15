/* eslint-disable default-param-last */
import actionTypes from '../actions/actionTypes';

function pokemonsReducer(pokemons = [], action) {
  const newpokemons = [...pokemons];
  if (action.type === actionTypes.LOAD_POKEMONS) {
    return action.pokemons;
  }
  return newpokemons;
}

export default pokemonsReducer;
