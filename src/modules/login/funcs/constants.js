/**
 * define reducer name
 */
export const REDUCER_NAME = "login";

/**
 * define actiontypes
 */
export const LOGIN_REQUEST = "LOGIN/LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN/LOGIN_REQUEST_SUCCESS";

/**
 * define actions
 */
export const loginAction = loginPost => {
	return {
		type: LOGIN_REQUEST,
		loginPost,
		loginSuccess: false
	};
};

export const loginSuccess = () => {
	return {
		type: LOGIN_REQUEST_SUCCESS,
		loginSuccess: true
	};
};
