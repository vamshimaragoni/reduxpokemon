import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers';

const rootReducer = combineReducers({
  pikachu: pokemonReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

export default store;



