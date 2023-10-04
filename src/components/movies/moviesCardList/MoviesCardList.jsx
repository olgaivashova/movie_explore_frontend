import "./MoviesCardList.css";
import MoviesCard from "../moviesCard/MoviesCard";
import { moviesArray } from "../../../utils/constants";

function MoviesCardList() {
  return (
    <section className="card-list">
      <ul className="card-list__container">
        {moviesArray.map((item) => {
          return (
            <li className="card-list__item" key={item.id}>
              <MoviesCard movie={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
