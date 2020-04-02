import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { I18n } from "react-i18nify";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { getSettings } from "commons/utils/settingsHelper";
import getUrl from "commons/utils/urlHelper";
import getLang from "commons/utils/langHelper";
import Routers from "./router";
import store, { injectAsyncReducer, sagaMiddleware } from "commons/store";
import { reducer, reducerName, sagas } from "modules/auth";

sagaMiddleware.run(sagas);
injectAsyncReducer(store, reducerName, reducer);

async function init() {
  const settings = await getSettings(),
    urls = await getUrl(),
    lang = await getLang(settings.defaultLanguage);
  return Promise.resolve({ urls, settings, lang });
}

init().then((d) => {
  I18n.setTranslations(d.lang);
  I18n.setLocale(d.settings.languages[d.settings.defaultLanguage]);
  ReactDOM.render(
    <Provider store={store}>
      <Routers />
    </Provider>,
    document.getElementById("root")
  );
});

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
