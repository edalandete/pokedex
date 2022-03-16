import actionTypes from './actionTypes';
import
{ loadPokemons, filterPokemons }
  from './actionCreators';

describe('Given a loadPokemons action creator', () => {
  describe('When it is called by the dispatcher and the response is OK', () => {
    test('Then should load a list of pokemons', async () => {
      const pokemons = [{ name: 'pika' }];

      const dispatch = jest.fn();
      await loadPokemons(pokemons)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.LOAD_POKEMONS,
          pokemons: [{ name: 'pika' }]
        }
      );
    });
  });
});

describe('Given a filterPokemons action creator', () => {
  describe('When it is called by the dispatcher and the response is OK', () => {
    test('Then should return a list of filtered pokemons', async () => {
      const pokemons = [{ name: 'pika' }, { name: 'bat' }];

      const dispatch = jest.fn();
      await filterPokemons(pokemons)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        {
          type: actionTypes.FILTER_POKEMONS,
          filteredPokemons: [{ name: 'pika' }, { name: 'bat' }]
        }
      );
    });
  });
});
