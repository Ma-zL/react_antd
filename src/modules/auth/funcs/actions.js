import * as actions from "./actionTypes";
import { pendingTask, begin, end } from "react-redux-spinner";

// Login
export const loginRequest = (userName, password, accountId) => ({
	type: actions.LOGIN_REQUEST,
	userName,
	password,
	accountId,
	[pendingTask]: begin
});

export const loginSuccess = () => ({
	type: actions.LOGIN_SUCCESS,
	[pendingTask]: end
});

export const loginFailure = () => ({
	type: actions.LOGIN_FAILURE,
	[pendingTask]: end
});

// Logout
export const logoutRequest = (token, userid) => ({
	type: actions.LOGOUT_REQUEST,
	token,
	[pendingTask]: begin,
	userid
});

export const logoutSuccess = () => ({
	type: actions.LOGOUT_SUCCESS,
	[pendingTask]: end
});

export const logoutFailure = () => ({
	type: actions.LOGOUT_FAILURE,
	[pendingTask]: end
});
