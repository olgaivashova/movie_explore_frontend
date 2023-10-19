import React, { useEffect, useState } from "react";
import MoviesCardList from "../moviesCardList/MoviesCardList";
import SearchForm from "../searchForm/SearchForm";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import useForm from "../../hooks/useForm";
import mainApi from "../../utils/MainApi";
import { filterMoviesByInput } from "../../utils/utils";

export default function SavedMovies({savedMovies, setSavedMovies, beatMovies, setBeatMovies}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  const {search, isSwitched, handleChange, handleCheckboxChange} = useForm();

  useEffect(() => {
    setIsEmptySearch(false);
    setServerError(false);
  }, [search, isSwitched])

  useEffect(() => {
    setFilteredMovies(savedMovies);
    }, [!!savedMovies.length])

  async function handleCheckbox(evt) {
    await handleCheckboxChange(evt);
    if (search) {
      const upgradedFilteredMovies = filterMoviesByInput(search, evt.target.checked, savedMovies);
      setFilteredMovies(upgradedFilteredMovies);
      setIsEmptySearch(!upgradedFilteredMovies.length);
    } else {
      const upgradedFilteredMovies = savedMovies.filter((item) => {
        return evt.target.checked ? item.duration <= 40 : item
      })
      setFilteredMovies(upgradedFilteredMovies);
      setIsEmptySearch(!upgradedFilteredMovies.length);
    }
  }

  function searchMovie(search, isSwitched) {
    const upgradedResultArray = filterMoviesByInput(search, isSwitched, savedMovies)
    if (upgradedResultArray.length === 0) {
      setIsEmptySearch(true);
    }
    setFilteredMovies(upgradedResultArray);
  }

  function deleteMovie(movie) {
    return mainApi.deleteMovie(movie['_id'])
      .then(() => {
          handleStorages(movie);
          if (savedMovies.length <= 1) {
            setIsEmptySearch(() => true);
          }
        }
      )
      .catch(err => {
        setServerError(true);
        console.log(err);
      });
  }

  function handleStorages(movie) {
    const localStorageFilteredMovies = localStorage.getItem("filteredMovies");
    if (localStorageFilteredMovies) {
      const upgradedMovies = JSON.parse(localStorageFilteredMovies)
        .map((item) => {
          if (item.id === movie.movieId) {
            item.saved = false
            return item
          } else {
            return item
          }
        })
      localStorage.setItem("filteredMovies", JSON.stringify(upgradedMovies));
    }

    const upgradedFilteredMovies = filteredMovies.filter((item) => (item['_id'] !== movie['_id']));
    setFilteredMovies(upgradedFilteredMovies);

    const upgradedSavedList = savedMovies.filter((item) => (item['_id'] !== movie['_id']));
    setSavedMovies(upgradedSavedList);

    const upgradedBeatMovies = beatMovies.map((item) => {
      if (item.id === movie.movieId) {
        item.saved = false
        return item
      } else {
        return item
      }
    })
    setBeatMovies(upgradedBeatMovies);
  }

  return (
    <>
      <Header/>
      <main>
        <div className="saved-movies">
          <SearchForm
            onCheckbox={handleCheckbox}
            onSubmit={searchMovie}
            onChange={handleChange}
            search={search}
            isSwitched={isSwitched}
          />
          <MoviesCardList
            filteredMovies={filteredMovies}
            isEmptySearch={isEmptySearch}
            serverError={serverError}
            onDelete={deleteMovie}
          />
        </div>
      </main>
      <Footer/>
    </>

  );
}
