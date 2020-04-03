import * as constants from "./constants";
import reducerHelper from "commons/utils/reducerHelper";

const initalState = {};

const handler = {
	[constants.LOGIN_REQUEST](state, action) {
		return {
			...state,
			loginSuccess: action.loginSuccess
		};
	},
	[constants.LOGIN_REQUEST_SUCCESS](state, action) {
		return {
			...state,
			loginSuccess: action.loginSuccess
		};
	}
};

const reducer = reducerHelper(initalState, Object.assign({}, handler));

export default reducer;
