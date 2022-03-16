import { getPokemonsByName } from '../selectors/pokemon.selector';
import actionTypes from './actionTypes';

export function loadPokemons(pokemons) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_POKEMONS,
      pokemons
    });
  };
}

export function filterPokemons(pokemons, searchValue) {
  return async (dispatch) => {
    try {
      const filteredPokemons = searchValue
        ? getPokemonsByName(pokemons, searchValue)
        : pokemons;

      dispatch({
        type: actionTypes.FILTER_POKEMONS,
        filteredPokemons
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FILTER_POKEMONS_ERROR
      });
    }
  };
}
