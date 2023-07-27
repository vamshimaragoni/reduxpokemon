import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
  setOffset,
} from './actions';
import './App.css';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const limit = 3;

function App() {
  const pokemons = useSelector((state) => state.pikachu.pokemons); 
  const loading = useSelector((state) => state.pikachu.loading); 
  const offset = useSelector((state) => state.pikachu.offset); 
  const error = useSelector((state) => state.pikachu.error); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData(`${apiUrl}?offset=${offset}&limit=${limit}`);
  }, [offset]);

  async function fetchData(apiUrl) {
    dispatch(fetchPokemonsRequest());

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonInfo = await response.json();
          return {
            id: pokemonInfo.id,
            name: pokemonInfo.name,
            sprites: pokemonInfo.sprites, 
          };
        })
      );

      dispatch(fetchPokemonsSuccess(pokemonData));
    } catch (error) {
      dispatch(fetchPokemonsFailure(error.message));
    }
  }

  function handleNextClick() {
    dispatch(setOffset(offset + limit));
  }

  function handlePrevClick() {
    dispatch(setOffset(Math.max(offset - limit, 0)));
  }

  return (
    <div className="App">
      <h1>Pokemon Gallery</h1>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error: {error}</p> : null}
      <div id="gallery">
        {pokemons.length === 0 ? (
          <p>No Pokemon available.</p>
        ) : (
          pokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img" />
              <p className="pokemon-name">ID: {pokemon.id} - {pokemon.name}</p>
            </div>
          ))
        )}
      </div>
      <div>
        <button onClick={handlePrevClick} disabled={offset === 0}>
          Prev
        </button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default App;
