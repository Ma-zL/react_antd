import fetch from "../commons/utils/fetch";
import getUrl from "../commons/utils/urlHelper";

export async function login(loginPost) {
	const urls = await getUrl();

	return fetch.postForm(urls.login, loginPost);
}
