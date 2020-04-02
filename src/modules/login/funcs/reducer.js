import * as actionTypes from "./constants";
import reducerHelper from "../../../commons/utils/reducerHelper";

const initalState = {};

const handler = {
  [actionTypes.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      count: action.count,
    };
  },
};

let reducer = reducerHelper(initalState, Object.assign({}, handler));

export default reducer;
