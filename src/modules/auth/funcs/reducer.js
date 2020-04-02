import * as actions from "./actionTypes";
import createReducer from "../../../commons/utils/reducerHelper";

const initialState = {
  isValid: false,
  isOpenPassword: false,
  isLoading: false,
  systemConfig: {},
};

const login = {
  [actions.LOGIN_REQUEST](state, action) {
    return { ...state, loginFlag: true };
  },
  [actions.LOGOUT_SUCCESS](state, action) {
    return { ...state, isValid: false };
  },
};

const loginReducer = createReducer(initialState, Object.assign({}, login));

export default loginReducer;
