import React from "react";
import "./SearchForm.css";
import loop from "../../../images/icon.svg";
import FilterCheckbox from "./filterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <fieldset className="search-form__info">
          <img
            className="search-form__image-loop"
            src={loop}
            alt="иконка лупы"
          />
          <input
            type="text"
            className="search-form__input"
            name="search"
            placeholder="Фильм"
            required
          />
          <button className="search-form__find-button" type="submit"></button>
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  );
}
