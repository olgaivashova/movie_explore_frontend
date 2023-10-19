import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./MoviesCard.css";
import flag from "../../../images/flag_saveButton.svg";
import close from "../../../images/close_burger.svg";
import { MOVIES_URL } from "../../../utils/constants";

function MoviesCard({onDelete, item, onUndoSave, onSave}) {
  const location = useLocation();

  function saveMovie() {
    onSave(item);
  }

  function deleteMovie() {
    onDelete(item);
  }

  function undoSaveMovie() {
    onUndoSave(item)
  }

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);
    return `${hours > 0 ? hours + 'ч ' : ''}${minutes}м`;
  }

  return (
    <section className="movies-card">
      <div className="movies-card__description">
        <h3 className="movies-card__title">{item.nameRU}</h3>
        {location.pathname === "/saved-movies" ?
          <button className="movies-card__save-circle" onClick={deleteMovie}>
            <img className="movies-card__close-icon" src={close} alt="кнопка-крестик"/>
          </button>
          : item.saved ?
            <button
              className="movies-card__save-circle movies-card__save-circle_type_active"
              type="button"
              onClick={undoSaveMovie}
            ><img className="movies-card__save-flag" src={flag} alt="флажок в круге"/></button>
            : <button className="movies-card__save-circle" type="button" onClick={saveMovie}>
              <img className="movies-card__save-flag" src={flag} alt="флажок в круге"/>
            </button>
        }
        <span className="movies-card__duration">{toHoursAndMinutes(item.duration)}</span>
      </div>
      <Link to={item.trailerLink} target="_blank">
        <img
          src={location.pathname === "/movies" ? `${MOVIES_URL}${item.image.url}` : item.image}
          className="movies-card__image"
          alt={item.name}
        />
      </Link>
    </section>
  );
}

export default MoviesCard;
