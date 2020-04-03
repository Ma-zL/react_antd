import { LANG_CONFIG_PATH, LANGUAGE_KEY } from "../constants/const";
import Fetch from "./fetch";

const langFunc = async (lang, header) => {
	const langs = {};
	const lan = await Fetch.get(LANG_CONFIG_PATH.replace("{0}", lang), header);
	for (const key in lan) {
		if (!Object.prototype.hasOwnProperty.call(langs, key)) {
			langs[key] = {};
		}
		langs[key] = Object.assign(langs[key], lan[key]);
	}
	return langs;
};

const getLang = async lang => {
	const KEY = LANGUAGE_KEY + "-" + lang.toUpperCase();
	const data = sessionStorage.getItem(KEY);
	if (data) {
		return new Promise(function (resolve, reject) {
			resolve(JSON.parse(data));
		});
	}

	const header = {
		headers: {
			"Cache-control": "no-store"
		}
	};

	const language = await langFunc(lang, header);
	sessionStorage.setItem(KEY, JSON.stringify(language));
	return language;
};

export default getLang;
