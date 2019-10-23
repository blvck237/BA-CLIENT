import { createStore,  applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import combinedReducers from './reducers';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

/**
 * [REDUX_ACTION_LOGGER] Only in Dev
 */
const logger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
});

/**
 * [FOR_ASYNC]
 */
const middlewares = [thunk];
middlewares.push(logger);

/**
 * [REDUX_PERSIST]
 */
const persistConfig = {
  key: 'ba-client',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default () => {
  const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)));

  const persistor = persistStore(store);

  return { store, persistor };
};
