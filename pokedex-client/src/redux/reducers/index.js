import { combineReducers } from 'redux';
import pokemons from './pokemonsReducer';
import filteredPokemons from './filteredPokemonsReducer';

const rootReducer = combineReducers({
  pokemons,
  filteredPokemons
});

export default rootReducer;
