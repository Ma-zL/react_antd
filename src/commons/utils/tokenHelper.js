import { TOKEN_KEY } from "../constants/const";

/**
 * @fileOverview Local token management
 * @module TokenHelper
 * @exports {
 *  get,
 *  set,
 *  remove
 * }
 */

/**
 * Set token to localStorage
 * @example
 * import tokenHelper from './tokenHelper';
 * tokenHelper.set('this is your current token from server side');
 *
 * @param {string} token token string from server side
 */
function set(token) {
	sessionStorage.setItem(TOKEN_KEY, token);
}

/**
 * Get token from localStorage
 * @example
 * import tokenHelper from './tokenHelper';
 * let token = tokenHelper.get();
 * @returns current token
 */
function get() {
	return sessionStorage.getItem(TOKEN_KEY);
}

/**
 * Remove currrent token from localStorage
 * @example
 * import tokenHelper from './tokenHelper';
 * tokenHelper.remove();
 *
 */
function remove() {
	sessionStorage.removeItem(TOKEN_KEY);
}

export default {
	set,
	get,
	remove
};
