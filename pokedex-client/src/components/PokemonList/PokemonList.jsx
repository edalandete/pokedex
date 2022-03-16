import React, {
  useEffect, useState
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsByName } from '../../redux/selectors/pokemon.selector';
import { loadPokemons, filterPokemons } from '../../redux/actions/actionCreators';
import fetchFirstGenerationPokemon from '../../api/pokemon.service';
import './pokemonList.scss';

function PokemonsList() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const pokes = useSelector((store) => store.pokemons);
  const filteredPokes = useSelector((store) => store.filteredPokemons);

  useEffect(() => {
    if (!pokes.length) {
      const firstGeneration = fetchFirstGenerationPokemon();
      firstGeneration.then((response) => {
        dispatch(loadPokemons(response));
      })
        .catch(
          console.error('error')
        );
    }
  }, []);

  const handleInputChange = (event) => setSearchValue(event.target.value);

  const filterValues = () => {
    const filteredPokemons = searchValue
      ? getPokemonsByName(pokes, searchValue)
      : pokes;

    dispatch(filterPokemons(filteredPokemons));
  };

  const clearFilter = () => dispatch(filterPokemons(pokes));

  return (
    <main>
      <h1>Pokemons List</h1>
      <section className="filter-form">
        <input
          type="text"
          name="filterText"
          className="filter-text"
          placeholder="Search"
          onChange={handleInputChange}
          value={searchValue}
        />

        <button type="button" onClick={filterValues} className="buttons buttons--search">Search</button>
        <button type="button" onClick={clearFilter} className="buttons buttons--clear">Clear</button>

      </section>

      <ul className="gallery">
        {
              filteredPokes && filteredPokes.map((pokemon) => (
                <Link to={`/pokemon/${pokemon.name}`} data-testid={pokemon.id} className="links pokemon" key={pokemon.id}>
                  <li>
                    <div>
                      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} className="pokemon-poster" />
                    </div>
                    <span className="pokemon--bold">{pokemon.name}</span>
                  </li>
                </Link>
              ))
          }
      </ul>
    </main>
  );
}

export default (PokemonsList);
