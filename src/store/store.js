import { createStore } from 'redux';

import createRootReducer from './reducers/root';

import Reacttotron from '../ReactotronConfig';

export function buildStore(initialState) {
  const fn = () => {};
  const reduxDevtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : fn;

  const rootReducer = createRootReducer();

  const usingReactToTronRedux = false; //for network inspect install react to tron and enable this flag /adb reverse tcp:9090 tcp:9090
  const enhancers = usingReactToTronRedux
    ? Reacttotron.createEnhancer()
    : reduxDevtoolsEnhancer();

  const store = process?.env?.NODE_ENV?.match('development')
    ? createStore(rootReducer, initialState, enhancers)
    : createStore(rootReducer, initialState);

  return store;
}

export default buildStore();
