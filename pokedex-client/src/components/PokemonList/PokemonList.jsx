import React, {
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFirstGenerationPokemon, loadPokemons } from '../../redux/actions/actionCreators';
import './pokemonList.scss';

function PokemonsList() {
  const dispatch = useDispatch();
  const pokes = useSelector((store) => store.pokemons);

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

  return (
    <main>
      <h1>Pokrmons List</h1>
      <section className="filter-form">
        <input
          type="text"
          name="filterText"
          className="filter-text"
          placeholder="Search"
        />

      </section>

      <ul className="gallery">
        {
              pokes && pokes.map((pokemon) => (
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
