import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "../utils/createReducer";

export const sagaMiddleware = createSagaMiddleware();

let finalCreateStore = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore);

export function configureStore(initialState) {
  let store = finalCreateStore(createReducer(), initialState);
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}

export function resetAsyncReducer(store) {
  store.asyncReducers = [];
}

const app = configureStore();

export default app;
