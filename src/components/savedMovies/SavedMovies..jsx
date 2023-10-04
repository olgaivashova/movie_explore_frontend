import React from "react";
import './SavedMovies.css';
import "../movies/moviesCardList/MoviesCardList";
import SearchForm from "../movies/searchForm/SearchForm";
import MoviesCard from "../movies/moviesCard/MoviesCard";
import { savedMoviesArray } from "../../utils/constants";

 export default function SavedMovies() {
  return ( 
    <main>
     <div className="saved-movies__container">
  <SearchForm />
 ( <>
  <section className="card-list">
  <ul className="card-list__container">
 {savedMoviesArray.map((item) => {
   return (
   <li className="card-list__item" key={item.id} >
   <MoviesCard movie={item} name="saved" />   
 </li>   )
  }) } 
  </ul>
</section>
</>) 
 </div>
 </main>)
 }
