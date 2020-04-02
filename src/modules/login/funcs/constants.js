/**
 * define reducer name
 */
export const REDUCER_NAME = "login";

/**
 * define actiontypes
 */
export const LOGIN_REQUEST = "LOGIN/TEST_ACTION";

/**
 * define actions
 */
export const loginAction = (loginPost) => {
  return {
    type: LOGIN_REQUEST,
    loginPost,
  };
};
