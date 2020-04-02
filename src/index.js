import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { getSettings } from "./commons/utils/settingsHelper";
import getUrl from "./commons/utils/urlHelper";
import Routers from "./router";
import store, { injectAsyncReducer, sagaMiddleware } from "./commons/store";
import { actions as auth, reducer, reducerName, sagas } from "./modules/auth";

sagaMiddleware.run(sagas);
injectAsyncReducer(store, reducerName, reducer);

async function init() {
  const settings = await getSettings(),
    urls = await getUrl();
  return Promise.resolve({ urls, settings });
}

init().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Routers />
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
