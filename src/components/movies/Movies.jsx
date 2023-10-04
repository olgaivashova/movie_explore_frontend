import React from "react";
import "./Movies.css";
import SearchForm from "./searchForm/SearchForm";
import MoviesCardList from "./moviesCardList/MoviesCardList";
import Preloader from "./preloader/Preloader";

export default function Movies() {
  return (
    <main>
      <section className="movies__container">
        <SearchForm />
        <MoviesCardList />
        <Preloader />
      </section>
    </main>
  );
}
