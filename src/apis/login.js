import fetch from "../commons/utils/fetch";
import getUrl from "../commons/utils/urlHelper";

export async function login(loginPost) {
  let urls = await getUrl();

  return fetch.postForm(urls.login, loginPost, {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  });
}
