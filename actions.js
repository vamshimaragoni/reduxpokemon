//Action Types
export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';
export const SET_OFFSET = 'SET_OFFSET';

//Action Creators
export const fetchPokemonsRequest = () => ({
  type: FETCH_POKEMONS_REQUEST,
});

export const fetchPokemonsSuccess = (pokemons) => ({
  type: FETCH_POKEMONS_SUCCESS,
  payload: pokemons,
});

export const fetchPokemonsFailure = (error) => ({
  type: FETCH_POKEMONS_FAILURE,
  payload: error,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});
