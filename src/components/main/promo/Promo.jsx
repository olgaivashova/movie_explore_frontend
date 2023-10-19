import "./Promo.css";
import globus from "../../../images/globus-of-words.svg";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__info">
          <div className="promo__text">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <a href="/#aboutProject" className="promo__link">
              Узнать больше
            </a>
          </div>
          <img
            className="promo__image"
            src={globus}
            alt="картинка глобуса из слов"
          />
        </div>
      </div>
    </section>
  );
}
