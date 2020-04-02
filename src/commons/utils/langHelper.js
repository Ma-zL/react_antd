import { LANG_CONFIG_PATH, LANGUAGE_KEY } from "../constants/const";
import Fetch from "./fetch";

let langFunc = async (lang, header) => {
  let langs = {};
  let lan = await Fetch.get(LANG_CONFIG_PATH.replace("{0}", lang), header);
  for (let key in lan) {
    if (!langs.hasOwnProperty(key)) {
      langs[key] = {};
    }
    langs[key] = Object.assign(langs[key], lan[key]);
  }
  return langs;
};

const getLang = async (lang) => {
  const KEY = LANGUAGE_KEY + "-" + lang.toUpperCase();
  var data = sessionStorage.getItem(KEY);
  if (data) {
    return new Promise(function (resolve, reject) {
      resolve(JSON.parse(data));
    });
  }

  let header = {
    headers: {
      "Cache-control": "no-store",
    },
  };

  const language = await langFunc(lang, header);
  sessionStorage.setItem(KEY, JSON.stringify(language));
  return language;
};

export default getLang;
