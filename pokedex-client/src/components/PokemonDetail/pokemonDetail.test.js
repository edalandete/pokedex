/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Router from 'react-router';
import PokemonDetail from './PokemonDetail';
import { render, screen } from '../../assets/test-utils';

describe('Given a PokemonDetail component', () => {
  describe('When it is rendered with a pokemon', () => {
    test('Then should render Pokemon Detailed', () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ name: 'urun' });

      const initialState = {
        pokemons: [{
          name: 'bulbasur',
          abilities: [
            {
              ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/'
              },
              is_hidden: false,
              slot: 1
            },
            {
              ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/'
              },
              is_hidden: true,
              slot: 3
            }
          ],
          types: [
            {
              slot: 1,
              type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/'
              }
            },
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            }
          ]
        }]
      };
      render(<PokemonDetail />, { initialState });
      expect(screen.getByText(/bulbasur/)).toBeInTheDocument();
    });
  });
});
