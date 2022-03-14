import React, {
  useEffect, useState
} from 'react';
import { Link } from 'react-router-dom';
import fetchFirstGenerationPokemon from '../../api/pokemon.service';
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

      <ul className="gallery">
        {
              poke && poke.map((pokemon) => (
                <li className="pokemon" key={pokemon.id}>
                  <Link to={`/${pokemon.id}`} data-testid={pokemon.id}>
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
