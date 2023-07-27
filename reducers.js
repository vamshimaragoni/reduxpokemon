import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  SET_OFFSET,
} from './actions';

// state of the store
const initialState = {
  pokemons: [],
  loading: false,
  error: null,
  offset: 0,
};

// reducer takes current state and action as parameters here
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
