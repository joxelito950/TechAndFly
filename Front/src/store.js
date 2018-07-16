import { createHashHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reduces';
import rootSagas from './sagas';

const initialState = {};

// Start history
const history = createHashHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Merge middlewares
const middlewares = [routerMiddleware(history)];

// define for dev tool
/* eslint-disable */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

middlewares.push(sagaMiddleware);

// Generate store
const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSagas);

// Export all the separate modules
export { history, store };
