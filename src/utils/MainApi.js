import { MAIN_URL } from "./constants";
import { Movie } from "./utils";

class MainApi {
  constructor() {
    this._url = MAIN_URL;
    this._headers = {'Content-Type': 'application/json'};
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  setUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._getResponseData);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(new Movie(data)),
    }).then(this._getResponseData);
  }

  deleteMovie(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getResponseData);
  }

  setToken(token) {
    this._headers['Authorization'] = `Bearer ${token}`
  }
}

const mainApi = new MainApi();

export default mainApi;
