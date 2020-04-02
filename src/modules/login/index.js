import store, { injectAsyncReducer, sagaMiddleware } from "../../commons/store";
// import { injectReducer } from "../../commons/store";
import view from "./views/container";
import { REDUCER_NAME } from "./funcs/constants";
import reducer from "./funcs/reducer";
import sagas from "./funcs/sagas";

injectAsyncReducer(store, REDUCER_NAME, reducer);
sagaMiddleware.run(sagas);

// injectReducer(reducer, sagas);

export { view };
