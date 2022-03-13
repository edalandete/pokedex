import React, {
  useEffect, useState
} from 'react';
import { Link } from 'react-router-dom';
import fetchFirstGenerationPokemon from '../../redux/actions/actionCreators';
import './pokemonList.scss';

function PokemonsList() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    if (!poke.length) {
      const firstGeneration = fetchFirstGenerationPokemon();
      firstGeneration.then((response) => {
        setPoke(response);
      })
        .catch(
          setPoke([])
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

      <ul className="pokemons-list">
        {
              poke && poke.map((pokemon) => (
                <li className="pokemons-list__item" key={pokemon.id}>
                  <Link to={`/${pokemon.id}`} data-testid={pokemon.id}>
                    <div>
                      <img src={pokemon?.sprites?.front_default} alt={pokemon.name} className="thumbnail" />
                    </div>
                    <p>{pokemon.name}</p>
                  </Link>
                </li>
              ))
          }
      </ul>
    </main>
  );
}

export default (PokemonsList);
