import { MOVIES_URL } from "./constants";

class MoviesApi {
  constructor(options) {
    this._url = options.baseUrl;
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  getMovies(options) {
    return fetch(`${this._url}`, options).then(this._getResponseData);
  }
}
const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL + "/beatfilm-movies",
});

export default moviesApi;
