import fetch from "../commons/utils/fetch";
import getUrl from "../commons/utils/urlHelper";

export async function login(userName, password) {
  let urls = await getUrl();
  let postData = {
    format: "ISCLoginDTO",
    id: userName,
    encryptedpassword: password,
  };

  return fetch.post(urls.login, postData);
}
