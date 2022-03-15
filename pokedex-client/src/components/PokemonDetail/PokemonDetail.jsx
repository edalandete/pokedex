/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router';
import './pokemonDetail.scss';

function PokemonDetail({ pokemon }) {
  const history = useHistory();
  const { id } = useParams();

  return (
    <main>
      <h1>
        {' '}
        {pokemon.name}
        {' '}
        Detail
      </h1>
      <div className="orc-details">
        <div className="image-container">
          <img src={pokemon.thumbnail} alt={pokemon.name} className="profile-picture" />
        </div>
        <ul className="orc-details__data">
          <li className="data__item">
            <p>
              <span className="badge">Name: </span>
              {pokemon.name}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Age: </span>
              {pokemon.age}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Height: </span>
              {pokemon.weight}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Weight: </span>
              {pokemon.height}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Hair Color: </span>
              {pokemon.hair_color}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Professions: </span>
              {pokemon.professions && pokemon.professions.map((profession) => (
                <span>
                  { profession }
                  {' '}
                </span>
              ))}

            </p>
          </li>
          <li className="data__item">
            <p>
              <span className="badge">Friends: </span>
              {orcFriends.length ? orcFriends.map((friend) => (
                <Link to={`/${friend.id}`} className="links">
                  { friend.name }
                  {' '}
                </Link>
              ))
                : <span>No friends</span>}

            </p>
          </li>
        </ul>
        <button type="button" onClick={history.goBack} className="buttons buttons--back"> Go Back </button>
      </div>
    </main>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({}).isRequired
};

function mapStateToProps({ orcs }) {
  return {
    orcs
  };
}
export default connect(mapStateToProps)(PokemonDetail);
