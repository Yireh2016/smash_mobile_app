import { createStore } from 'redux';

import getRootReducer from '../reducers/root';

function buildStore(initialState) {
  const rootReducer = getRootReducer();

  return createStore(rootReducer, initialState);
}

export default buildStore;
