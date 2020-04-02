import { URL_CONFIG_PATH, URL_KEY } from "../constants/const";
import fetch from "./fetch";

const convertUrl = (urls, developeMode) => {
  return urls;
};

const getUrl = async (urlProvider = convertUrl) => {
  const data = sessionStorage.getItem(URL_KEY);
  if (data) {
    return Promise.resolve(JSON.parse(data));
  }

  const urls = await fetch.get(URL_CONFIG_PATH),
    result = urlProvider(urls);
  sessionStorage.setItem(URL_KEY, JSON.stringify(result));
  return Promise.resolve(result);
};

export default getUrl;
