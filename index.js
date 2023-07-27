

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers';
import App from './App';
import './index.css';

const rootReducer = combineReducers({
  pikachu: pokemonReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], 
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
