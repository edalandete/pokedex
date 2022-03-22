/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Router from 'react-router';

import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

import
loadOrcs from '../../redux/actions/actionCreators';
import PokemonList from './PokemonList';

jest.mock('../../redux/actions/actionCreators');

describe('Given a TasksList component', () => {
  describe('When it is rendered with no orcs', () => {
    test('Then should render Pokemons List', () => {
      const initialState = { pokemons: [] };
      loadOrcs.mockReturnValue({ type: actionTypes.LOAD_POKEMONS, orcs: [] });
      render(<PokemonList />, { initialState });
      expect(screen.getByText(/Pokemons/)).toBeInTheDocument();
    });
  });
  describe('When its rendered with a Pokemons List', () => {
    const initialState = {
      orcs: [{
        id: '123',
        name: 'Urun'
      }]
    };
    test('Should render Urun', () => {
      loadOrcs.mockReturnValue({
        type: actionTypes.LOAD_POKEMONS,
        orcs: [{
          id: '123',
          name: 'Urun'
        }]
      });

      jest.spyOn(Router, 'useParams').mockReturnValue({ name: 'urun' });

      global.window = { location: { pathname: '/pokemon/urun' } };

      render(<PokemonList />, { initialState });

      expect(screen.getByText(/Urun/)).toBeInTheDocument();
    });

    test('And a pokemon is clicked', () => {
      loadOrcs.mockReturnValue({
        type: actionTypes.LOAD_POKEMONS,
        orcs: [{
          id: '123',
          name: 'Urun'
        }]
      });

      render(<PokemonList />, { initialState });
      fireEvent.click(screen.getByTestId('123'));
      expect(global.window.location.pathname).toEqual('/pokemon/123');
    });
  });
});
