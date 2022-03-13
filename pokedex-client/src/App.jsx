import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
// import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  return (
    <BrowserRouter>
      <h1>Pokemons</h1>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<PokemonList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
