import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

export default function injectReducer(reducers, sagas) {
  let reducer = combineReducers(reducers);
  let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  createStoreWithMiddleware(reducer);

  const sagaMiddleware = createSagaMiddleware();
  sagaMiddleware.run(sagas);
}
