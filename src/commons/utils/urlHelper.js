import { URL_CONFIG_PATH, URL_KEY, SETTINGS_KEY } from "../constants/const";
import fetch from "./fetch";

const convertUrl = (json, developeMode) => {
	console.log("urls: --", json);
	const result = {};
	for (const key in json) {
		const urlItem = json[key],
			type = urlItem.Type,
			wsProtocol = window.location.protocol === "http:" ? "ws:" : "wss:",
			protocol = type === "api" ? window.location.protocol : wsProtocol,
			ipAddress = developeMode
				? urlItem.Address
				: `${protocol}//${window.location.host}`;

		for (const key in urlItem.URL) {
			if (!Object.prototype.hasOwnProperty.call(urlItem.URL, key)) {
				return;
			}

			let url = urlItem.URL[key];
			url = url.startsWith("/") ? url.substring(1, url.length) : url;
			result[key] = `${ipAddress}/${url}`;
		}
	}

	return result;
};

const getUrl = async (urlProvider = convertUrl) => {
	const data = sessionStorage.getItem(URL_KEY);
	if (data) {
		return Promise.resolve(JSON.parse(data));
	}

	const urls = await fetch.get(URL_CONFIG_PATH),
		settingsConfig =
			sessionStorage.getItem(SETTINGS_KEY) &&
			JSON.parse(sessionStorage.getItem(SETTINGS_KEY)),
		result = urlProvider(urls, settingsConfig.development);
	sessionStorage.setItem(URL_KEY, JSON.stringify(result));
	return Promise.resolve(result);
};

export default getUrl;
