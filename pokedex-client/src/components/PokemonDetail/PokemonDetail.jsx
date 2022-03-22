/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { useParams, useNavigate } from 'react-router';
import PropTypes from 'prop-types';

import './pokemonDetail.scss';
import { getPokemonByName, getPokemonAbilities, getPokemonTypes } from '../../redux/selectors/pokemon.selector';

function PokemonDetail({ pokemons }) {
  const navigate = useNavigate();

  const { name } = useParams();
  const selectedPokemon = getPokemonByName(pokemons, name);
  const pokemonAbilities = getPokemonAbilities(selectedPokemon);
  const pokemonTypes = getPokemonTypes(selectedPokemon);

  return (
    <main>
      <h1>
        {selectedPokemon?.name}
      </h1>
      <div className="pokemon-details">
        <div className="image-container">
          <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${selectedPokemon?.name}.gif`} alt={selectedPokemon?.name} className="profile-picture" />
        </div>
        <ul className="pokemon-details__data">
          <li className="data__item" key={selectedPokemon?.id}>
            <span className="badge">ID: </span>
            {selectedPokemon?.id}
          </li>
          <li className="data__item" key="types">
            <span className="badge">Types: </span>
            {pokemonTypes && pokemonTypes.map((type) => (
              <span>
                {type}
                {' '}
              </span>
            ))}
          </li>
          <li className="data__item" key="height">
            <span className="badge">Height: </span>
            {selectedPokemon?.height}
          </li>
          <li className="data__item" kry="abilities">
            <span className="badge">Abilities: </span>

            {pokemonAbilities && pokemonAbilities.map(
              (ability) => (
                <span>
                  { ability }
                  {' '}
                </span>
              )
            )}

          </li>
        </ul>
        <button type="button" onClick={() => navigate(-1)} className="buttons buttons--back"> Go Back </button>

      </div>
    </main>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({}).isRequired
};

function mapStateToProps({ pokemons }) {
  return {
    pokemons
  };
}
export default connect(mapStateToProps)(PokemonDetail);
