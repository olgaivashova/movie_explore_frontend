import "./Navigation.css";
import account from "../../../images/header_loggedIn-icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../images/header-logo.svg";

export default function Navigation({ loggedIn }) {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [burgerNav, setBurgerNav] = useState(false);

  const handleClick = () => {
    setBurgerNav(!burgerNav);
  };
  useEffect(() => {
    function closeBurger() {
      if (document.documentElement.clientWidth > 1010) {
        setBurgerNav(false);
        window.removeEventListener("resize", closeBurger);
      }
    }
    if (burgerNav === true) {
      window.addEventListener("resize", closeBurger);
      return () => window.removeEventListener("resize", closeBurger);
    }
  }, [burgerNav]);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className="navigation">
      {loggedIn ? (
        <>
          <nav className="navigation-content navigation-content_place_movies">
            <Link to="/">
              <img
                className="navigation-content__logo"
                src={logo}
                alt="Логотип searchMovie"
              />
            </Link>

            <ul
              className={`navigation-content__bar ${
                burgerNav
                  ? "navigation-content__bar_type_active"
                  : "navigation-content__bar"
              }`}
              onClick={handleClick}
            >
              <div className="navigation-content__all-links">
                <div className="navigation-content__links">
                  <li>
                    <Link
                      to="/"
                      className={`navigation-content__text ${
                        burgerNav
                          ? "navigation-content__text_type_active"
                          : "navigation-content__text"
                      }`}
                    >
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/movies"
                      className={`navigation-content__item ${
                        url === "/movies"
                          ? "navigation-content__item_type_active"
                          : ""
                      }`}
                    >
                      Фильмы
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/saved-movies"
                      className={`navigation-content__item ${
                        url === "/saved-movies"
                          ? "navigation-content__item_type_active"
                          : ""
                      }`}
                    >
                      Сохранённые фильмы
                    </Link>
                  </li>
                </div>
                <li>
                  <Link
                    to="/profile"
                    className="navigation-content__account-group"
                  >
                    <button
                      className="navigation-content__account-btn"
                      type="button"
                    >
                      Аккаунт
                    </button>
                    <img
                      className="navigation-content__account-image"
                      src={account}
                      alt="иконка аккаунта"
                    />
                  </Link>
                </li>
              </div>
            </ul>
            <button
              className={`navigation-content__burger-btn ${
                burgerNav ? "navigation-content__burger-btn_type_active" : ""
              }`}
              onClick={handleClick}
            ></button>
          </nav>
        </>
      ) : (
        <>
          <nav className="navigation-content navigation-content_place_main">
            <li>
              <Link to="/">
                <img
                  className="navigation-content__logo"
                  src={logo}
                  alt="Логотип searchMovie"
                />
              </Link>
            </li>
            <div className="navigation-content__buttons">
              <li>
                <Link to="/signup" className="navigation-content__signup">
                  Регистрация
                </Link>
              </li>
              <li>
                <Link to="/signin">
                  <button
                    className="navigation-content__signin-button"
                    type="button"
                  >
                    Войти
                  </button>
                </Link>
              </li>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
