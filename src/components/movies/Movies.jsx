import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../searchForm/SearchForm";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { filterMoviesByInput, upgradeBeatMovies } from "../../utils/utils";
import useForm from "../../hooks/useForm";
import Preloader from "../preloader/Preloader";
import mainApi from "../../utils/MainApi";


export default function Movies({savedMovies, setSavedMovies, beatMovies, setBeatMovies}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const {search, isSwitched, handleChange, handleCheckboxChange, setSearch, setIsSwitched} = useForm();

  function filterMovies(search, isSwitched, movies) {
    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("shorts", JSON.stringify(isSwitched));
    const filteredMovies = filterMoviesByInput(search, isSwitched, movies);
    setFilteredMovies(filteredMovies);
    localStorage.setItem("filteredMovies", JSON.stringify(filteredMovies));
    if (filteredMovies.length === 0) {
      setIsEmptySearch(true);
    }
  }

  function handleStorages(movie) {
    setBeatMovies(beatMovies.map((res) => (res.id === movie.id) ? movie : res));
    const localStorageFilteredMovies = localStorage.getItem("filteredMovies");
    if (localStorageFilteredMovies) {
      const upgradedMovies = JSON.parse(localStorageFilteredMovies).map((res) => (res.id === movie.id) ? movie : res);
      setFilteredMovies(upgradedMovies);
      localStorage.setItem("filteredMovies", JSON.stringify(upgradedMovies));
    }
  }

  function loadBeatMovies() {
    setIsSearching(true);
    return moviesApi.getMovies()
      .then((res) => {
        const upgradedMovies = upgradeBeatMovies(res, savedMovies);
        setBeatMovies(upgradedMovies);
        return upgradedMovies;
      })
      .catch((err) => {
        setServerError(true);
        console.error(err);
      })
      .finally(() => setIsSearching(false))
  }

  function searchMovie(search, isSwitched) {
    if (beatMovies.length === 0) {
      loadBeatMovies()
        .then(movies => filterMovies(search, isSwitched, movies))
        .catch(err => console.log(err));
    } else {
      filterMovies(search, isSwitched, beatMovies);
    }
  }

  useEffect(() => {
    const search = JSON.parse(localStorage.getItem("search"));
    const isSwitched = localStorage.getItem("shorts");
    const movies = JSON.parse(localStorage.getItem("filteredMovies"));
    if (search && isSwitched && movies) {
      setSearch(search);
      setIsSwitched(JSON.parse(isSwitched));
      filterMovies(search, JSON.parse(isSwitched), movies)
    }
  }, []);

  function handleCheckbox(evt) {
    handleCheckboxChange(evt);
    if (beatMovies.length === 0) {
      loadBeatMovies()
        .then(movies => filterMovies(search, evt.target.checked, movies))
        .catch(err => console.log(err));
    } else {
      filterMovies(search, evt.target.checked, beatMovies);
    }
  }

  function saveMovie(movie) {
    return mainApi.addMovie(movie)
      .then((res) => {
        movie.savedId = res["_id"]
        movie.saved = true;
        handleStorages(movie);
        setSavedMovies(prev => [...prev, res])
      })
      .catch(err => {
        setServerError(true);
        console.log(err);
      });
  }

  function undoSaveMovie(movie) {
    return mainApi.deleteMovie(movie.savedId)
      .then(() => {
        movie.saved = false;
        handleStorages(movie)
        setSavedMovies(prev => prev.filter(item => item["_id"] !== movie.movieId))
      })
      .catch(err => {
        setServerError(true);
        console.log(err);
      });
  }

  useEffect(() => {
    setIsEmptySearch(false);
    setServerError(false);
  }, [search, isSwitched])

  return (
    <>
      <Header/>
      <main>
        <section className="movies">
          <SearchForm
            onCheckbox={handleCheckbox}
            onSubmit={searchMovie}
            onChange={handleChange}
            search={search}
            isSwitched={isSwitched}
          />
          {isSearching ? <Preloader/> : <MoviesCardList
            filteredMovies={filteredMovies}
            onSave={saveMovie}
            onUndoSaveMovie={undoSaveMovie}
            isEmptySearch={isEmptySearch}
            serverError={serverError}
          />}
        </section>
      </main>
      <Footer/>
    </>
  );
}
