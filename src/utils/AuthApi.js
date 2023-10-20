import { MAIN_URL } from "./constants";

class Auth {
  constructor() {
    this._url = MAIN_URL;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }

  signup(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then((res) => this._getResponseData(res));
  }

  signin(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => this._getResponseData(res));
  }
}

const authApi = new Auth();

export default authApi;
