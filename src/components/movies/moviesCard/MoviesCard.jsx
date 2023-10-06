import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import flag from "../../../images/flag_saveButton.svg";
import close from "../../../images/close_burger.svg";

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [url, setUrl] = useState(null);

  function toggleSave() {
    setIsSaved(!isSaved);
  }

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <section className="movies-card">
      <div className="movies-card__description">
        <h3 className="movies-card__title">{movie.name}</h3>
        {url === "/saved-movies" ? (
          <button className="movies-card__save-circle">
            <img
              className="movies-card__close-icon"
              src={close}
              alt="кнопка-крестик"
            />
          </button>
        ) : (
          <button
            className={`movies-card__save-circle ${
              isSaved ? "movies-card__save-circle_type_active" : ""
            }`}
            type="button"
            onClick={toggleSave}
          >
            <img
              className="movies-card__save-flag"
              src={flag}
              alt="флажок в круге"
            />
          </button>
        )}
        <span className="movies-card__duration">{movie.duration}</span>
      </div>
      <img className="movies-card__image" src={movie.imgUrl} alt={movie.name} />
    </section>
  );
}

export default MoviesCard;
