import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

const loadPokemons = () => async (dispatch) => {
  try {
    // eslint-disable-next-line no-debugger
    debugger;
    const { data } = await axios(url);
    const { results } = data;
    dispatch({
      type: actionTypes.LOAD_POKEMONS,
      pokemons: results
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_POKEMONS_ERROR
    });
  }
};

export default loadPokemons;
