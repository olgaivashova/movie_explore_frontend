import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MoviesCard from './moviesCard/MoviesCard';
import {
  addOnLargeScreen, addOnMediumScreen,
  initialOnLargeScreen,
  initialOnMediumScreen,
  initialOnSmallScreen, mediumScreenSize,
  smallScreenSize
} from "../../utils/constants";

export default function MoviesCardList({filteredMovies, onSave, onUndoSaveMovie, serverError, isEmptySearch, onDelete}) {
  const {pathname} = useLocation();
  const [amount, setAmount] = useState({init: initialOnLargeScreen, add: addOnLargeScreen});
  const [movieAmount, setMovieAmount] = useState(0);
  const [isAddPresent, setIsAddPresent] = useState(false);


  function showMoreItems() {
    const newMovieAmount = movieAmount + amount.add;
    if (filteredMovies.length > newMovieAmount) {
      setIsAddPresent(true);
      setMovieAmount(newMovieAmount);
    } else if (filteredMovies.length > movieAmount) {
      setIsAddPresent(false);
      setMovieAmount(newMovieAmount);
    } else {
      setIsAddPresent(false);
    }
  }

  useEffect(() => {
    function displayByResizing() {
      if (window.innerWidth <= smallScreenSize) {
        setAmount({init: initialOnSmallScreen, add: addOnMediumScreen});
      } else if (window.innerWidth > smallScreenSize && window.innerWidth <= mediumScreenSize) {
        setAmount({init: initialOnMediumScreen, add: addOnMediumScreen});
      } else {
        setAmount({init: initialOnLargeScreen, add: addOnLargeScreen});
      }
    }

    displayByResizing();
    window.addEventListener('resize', displayByResizing);
    return () => window.removeEventListener('resize', displayByResizing);
  }, []);

  useEffect(() => {
    setMovieAmount(amount.init);
    if (pathname === '/movies') {
      setIsAddPresent(filteredMovies.length > amount.init);
    }
  }, [amount.init])

  useEffect(() => {
    if (pathname === '/movies') {
      setIsAddPresent(filteredMovies.length > amount.init)
    }
  }, [filteredMovies.length])

  return (
    <section className="card-list">
      {serverError &&
        <span className={`card-list__message ${serverError && 'card-list__message_type_active'}`}>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
      }
      {isEmptySearch && <span className="card-list__message card-list__message_type_active">По вашему запросу ничего не найдено</span>}
      <ul className="card-list__container">
        {filteredMovies.slice(0, pathname === "/movies" ? movieAmount : amount.init).map((item) => {
          return <li className="card-list__item" key={item["id"] || item["movieId"]}>
            <MoviesCard item={item} onSave={onSave} onUndoSave={onUndoSaveMovie} onDelete={onDelete}/>
          </li>
        })}
      </ul>
      {pathname === '/movies' && <button
        type="button"
        className={`card-list__loadmore-button${isAddPresent ? ' card-list__loadmore-button_type_visible' : ''}`}
        onClick={showMoreItems}
      >
        Ещё
      </button>
      }
    </section>
  );
}
