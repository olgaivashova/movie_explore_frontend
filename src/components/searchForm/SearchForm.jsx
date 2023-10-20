import React, { useEffect, useState } from "react";
import "./SearchForm.css";
import loop from "../../images/icon.svg";
import FilterCheckbox from "./filterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";

export default function SearchForm({search, onSubmit, onCheckbox, onChange, isSwitched}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const {pathname} = useLocation();
  const [isError, setIsError] = useState(false);

  function submitSearch(e) {
    e.preventDefault();
    setIsDisabled(() => true);
    search.trim() ? onSubmit(search, isSwitched) : setIsError(true);
    setIsDisabled(() => false);
  }

  function handleCheckbox(evt) {
    setIsDisabled(() => true);
    if (pathname === "/movies") {
      search.trim() ? onCheckbox(evt) : setIsError(true);
    } else {
      onCheckbox(evt);
    }
    setIsDisabled(() => false);
  }

  useEffect(() => {
    setIsError(false);
  }, [search])

  return (
    <section className="search-form">
      <form
        className="search-form__container"
        noValidate
        name={"searchForm"}
        onSubmit={submitSearch}
      >
        <fieldset className="search-form__info">
          <img className="search-form__image-loop" src={loop} alt="иконка лупы"/>
          <input
            type="text"
            className="search-form__input"
            name="search"
            placeholder="Начните поиск фильма"
            value={search || ""}
            onChange={onChange}
            disabled={isDisabled}
            required
          />
          <button disabled={isDisabled} type="submit" className="search-form__find-button"/>
        </fieldset>
        <span
          className={`search-form__error${isError ? " search-form__error_type_active" : ""}`}>Введите ключевое слово</span>
        <FilterCheckbox isSwitched={isSwitched} onCheckbox={handleCheckbox} isDisabled={isDisabled}/>
      </form>
    </section>
  );
}
