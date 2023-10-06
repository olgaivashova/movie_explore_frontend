import "./Portfolio.css";
import arrow from "../../../images/main-arrow.svg";
export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a
              href="https://github.com/olgaivashova/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
            </a>
            <a
              href="https://github.com/olgaivashova/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="portfolio__symbol"
                src={arrow}
                alt="символ перехода по ссылке"
              />
            </a>
          </li>

          <li className="portfolio__item">
            <a
              href="https://github.com/olgaivashova/russian-travel"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
            </a>
            <a
              href="https://github.com/olgaivashova/russian-travel"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="portfolio__symbol"
                src={arrow}
                alt="символ перехода по ссылке"
              />
            </a>
          </li>
          <li className="portfolio__item">
            <a
              href="https://github.com/olgaivashova/mesto-react-with-reg-auth"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
            </a>
            <a
              href="https://github.com/olgaivashova/mesto-react-with-reg-auth"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="portfolio__symbol"
                src={arrow}
                alt="символ перехода по ссылке"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
