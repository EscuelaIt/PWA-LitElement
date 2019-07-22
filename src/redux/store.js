import { 
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import thunk from 'redux-thunk';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import { app } from './reducers/app-reducer.js';

export const store = createStore(
  app,
  devCompose(
    applyMiddleware(thunk),
  )
);
