import { MOVIES_URL } from "./constants";

export function filterMoviesByInput(search, isSwitched, movies) {
  return movies.filter((movie) => {
    const data = movie.nameRU.toLowerCase().includes(search.toLowerCase())
    return isSwitched ? (movie.duration <= 40 && data) : data
  })
}

export function upgradeBeatMovies(beatMovies, savedMovies) {
  return beatMovies.map((movie) => {
    const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id)
    if (savedMovie) {
      return {...movie, saved: true, savedId: savedMovie['_id']}
    } else {
      return {...movie, saved: false}
    }
  })
}

export class Movie {
  constructor(data) {
    this.country = data.country;
    this.director = data.director;
    this.duration = data.duration;
    this.year = data.year;
    this.description = data.description;
    this.image = MOVIES_URL + data.image.url;
    this.trailerLink = data.trailerLink;
    this.thumbnail = MOVIES_URL + data.image.formats.thumbnail.url;
    this.movieId = data.id;
    this.nameRU = data.nameRU;
    this.nameEN = data.nameEN;
  }
}
