import { SETTINGS_KEY, SETTINGS_CONFIG_PATH } from "../constants/const";
import fetch from "./fetch";

export const getSettings = async () => {
	const data = sessionStorage.getItem(SETTINGS_KEY);
	if (data) {
		return new Promise(function (resolve) {
			resolve(JSON.parse(data));
		});
	}
	const settings = await fetch.get(SETTINGS_CONFIG_PATH);
	sessionStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
	return settings;
};
