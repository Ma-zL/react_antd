/**
 * @fileOverview Here need the description for this file
 * @module Fetch
 * @exports {
 *  get,
 *  post,
 *  put,
 *  del,
 *  postText
 * }
 */

import tokenHelper from "./tokenHelper";
import { TOKEN_KEY } from "../constants/const";
// import invalidToken from "./invalidToken";
import "whatwg-fetch";

// const invalidTokenCode = ["2007020009", "07010402"];

const ThrowErrMsg = err => {
	if (typeof err === "object") {
		err.message =
			err.message === "Failed to fetch"
				? "Service Unavailable"
				: err.message;
		return err;
	}
	return err;
};

const IsJsonString = function (str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
};

// private
const fetchApi = function (url, option) {
	return fetch(url, option)
		.then(res => {
			return res.text();
		})
		.then(text => {
			// let res = IsJsonString(text) ? JSON.parse(text) : text;
			// if (res && res.status && invalidTokenCode.includes(res.status.code)) {
			//   invalidToken();
			// }
			return IsJsonString(text) ? JSON.parse(text) : text;
		})
		.catch(err => {
			throw ThrowErrMsg(err);
		});
};

// private
const getCustomHeader = function (header = {}) {
	const result = {
		Accept: "application/json",
		"Content-Type": "application/json",
		...header
	};

	const token = tokenHelper.get();
	if (token) {
		result[TOKEN_KEY] = token;
	}

	return result;
};

const option = {
	mode: "cors",
	cache: "default"
};

/**
 * Call server API/JSON based on HTTP GET
 * @example
 * import Fetch from 'core/v2/fetch';
 * Fetch.get('http://api/user/profile').then(user=>console.log(user)).catch(err=>throw err);
 *
 * @param {string} url
 * @returns Promise
 */
function get(url, fileHeader, header) {
	const op = Object.assign(
		{},
		option,
		{
			method: "GET",
			headers: getCustomHeader(header)
		},
		fileHeader
	);
	return fetchApi(url, op);
}

/**
 * Call server API based on HTTP POST
 * @example
 * import Fetch from 'core/v2/fetch';
 * Fetch.post('http://api/user/login', {user:'zach', password:'pass'})
 *      .then(status=>console.log(user)).catch(err=>throw err);
 *
 * @param {string} url
 * @param {object} pd
 * @returns Promise
 */
function post(url, pd, hd = {}) {
	const op = Object.assign({}, option, {
		method: "POST",
		body: typeof pd === "string" ? pd : JSON.stringify(pd),
		headers: getCustomHeader(hd)
	});

	return fetchApi(url, op);
}

// /**
//  * Call server API based on HTTP DELETE
//  * @example
//  * import Fetch from 'core/v2/fetch';
//  * Fetch.del('http://api/user/remove/userid').then(status=>console.log(status)).catch(err=>throw err);
//  *
//  * @param {string} url
//  * @returns Promise
//  */
function del(url, pd) {
	if (!pd) {
		pd = {};
	}
	const op = Object.assign({}, option, {
		method: "DELETE",
		body: JSON.stringify(pd),
		headers: getCustomHeader()
	});

	return fetchApi(url, op);
}
// private
const getCustomHeaderLogin = function (header = {}) {
	const result = {
		Accept: "application/json",
		...header
	};

	const token = tokenHelper.get();
	if (token) {
		result[TOKEN_KEY] = token;
	}

	return result;
};

/**
 * Call server API based on HTTP POST
 * @example
 * import Fetch from 'core/v2/fetch';
 * Fetch.post('http://api/user/login', {user:'zach', password:'pass'})
 *      .then(status=>console.log(user)).catch(err=>throw err);
 *
 * @param {string} url
 * @param {object} pd
 * @returns Promise
 */
function postForm(url, pd, hd = {}) {
	const op = Object.assign({}, option, {
		method: "POST",
		body: pd,
		headers: getCustomHeaderLogin(hd)
	});

	return fetchApi(url, op);
}

export default {
	get,
	post,
	del,
	postForm
};
