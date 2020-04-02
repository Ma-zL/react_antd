import authorization from "./views/authorization";
import sagas from "./funcs/sagas";
import * as actions from "./funcs/actions";
import reducer from "./funcs/reducer";
import { REDUCER_NAME } from "./funcs/constants";

export { actions, reducer, sagas, authorization as Authorization, REDUCER_NAME as reducerName };
