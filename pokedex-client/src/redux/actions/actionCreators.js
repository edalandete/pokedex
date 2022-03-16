import actionTypes from './actionTypes';

export function loadPokemons(pokemons) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_POKEMONS,
      pokemons
    });
  };
}

export function filterPokemons(filteredPokemons) {
  return async (dispatch) => {
    try {
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
