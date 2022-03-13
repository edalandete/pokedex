import React, {
  useEffect
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import loadPokemons from '../../redux/actions/actionCreators';
import './pokemonList.scss';

function PokemonsList() {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons);

  useEffect(() => {
    console.log('inn');
    if (!pokemons.length) {
      dispatch(loadPokemons(151));
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
              pokemons && pokemons.map((pokemon) => (
                <li className="pokemons-list__item" key={pokemon.id}>
                  <Link to={`/${pokemon.id}`} data-testid={pokemon.id}>
                    <div>
                      <img src={pokemon.thumbnail} alt={pokemon.name} className="thumbnail" />
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
