import React, {
  useEffect, useState
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadPokemons, filterPokemons } from '../../redux/actions/actionCreators';
import fetchFirstGenerationPokemon from '../../api/pokemon.service';
import './pokemonList.scss';

function PokemonsList() {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const pokes = useSelector((store) => store.pokemons);
  const filteredPokes = useSelector((store) => store.filteredPokemons);
  console.log(filteredPokes, 'filter');

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

  const filterValues = () => dispatch(filterPokemons(pokes, searchValue));

  return (
    <main>
      <h1>Pokrmons List</h1>
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

      </section>

      <ul className="gallery">
        {
              filteredPokes && filteredPokes.map((pokemon) => (
                <li className="pokemon" key={pokemon.id}>
                  <Link to={`/pokemon/${pokemon.name}`} data-testid={pokemon.id}>
                    <div>
                      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} className="pokemon-poster" />
                    </div>
                  </Link>
                  <span className="pokemon--bold">{pokemon.name}</span>
                </li>
              ))
          }
      </ul>
    </main>
  );
}

export default (PokemonsList);
