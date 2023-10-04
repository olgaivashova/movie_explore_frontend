import React from "react";
import "./MoviesCard.css";
import SaveButton from "../saveButton/SaveButton";

function MoviesCard({ movie, name }) {
  return (
    <main>
      <section className="movies-card">
        <div className="movies-card__description">
          <h3 className="movies-card__title">{movie.name}</h3>
          <SaveButton name={name} />
          <span className="movies-card__duration">{movie.duration}</span>
        </div>
        <img
          className="movies-card__image"
          src={movie.imgUrl}
          alt={movie.name}
        />
      </section>
    </main>
  );
}

export default MoviesCard;
